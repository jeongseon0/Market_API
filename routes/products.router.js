const express = require("express");
const router = express.Router();

const productsSchema = require("../schemas/product.schema.js");
const { mongo } = require("mongoose");

// productId를 1부터 부여할 수 있음
// but 데이터베이스가 있는 상황에서 서버를 열어 id를 다시 1부터 부여하게 되면 오류가 생김
// lastIdNumber를 저장할 수 있는 무언가가 있으면 좋겠음,,
lastIdNumber = 0;

router.post("/products", (req, res) => {
  // 상품명, 내용, 작성자, 비밀번호 req로 입력받기

  const productId = ++lastIdNumber;
  const status = "FOR_SALE";
  const createdAt = new Date();

  const { title, content, author, password } = req.body;

  // if () { // body 값을 입력받지 못한 경우
  //   return res.status(400).json({success:false, message: "데이터 형식이 올바르지 않습니다."});
  // }

  const createdProduct = productsSchema.create({
    productId,
    title,
    content,
    author,
    password,
    status,
    createdAt,
  });

  res.json({ result: "success" });
});

router.get("/products", async (req, res) => {
  // id, 상품명, 작성자, 상태, 날짜
  const getProducts = await productsSchema.find({},{ title: 1, author: 1, status: 1, createdAt: 1 });

  res.json({ getProducts });
});

router.get("/product/:productId/", async (req, res) => {
  // id, 상품명, 내용, 작성자, 상태, 날짜
  const { productId } = req.params;
  const getProduct = await productsSchema
.find({productId: Number(productId)},{ title: 1, author: 1, status: 1, createdAt: 1 });

  res.json({ getProduct });

  // if () { // params 값을 입력받지 못한 경우
  //   return res.status(400).json({success:false, message: "데이터 형식이 올바르지 않습니다."});
  // }

  // if () { // productId에 해당하는 상품이 없을 때
  //   return res.status(404).json({success:false, message: "상품 조회에 실패했습니다."});
  // }
});

router.put("/product/:_id", async(req, res) => {
  // 상품명, 내용, 비밀번호, 상태
  const {productId} = req.params;
  const {title, content, password, status} = req.body;

  const updateProduct = await productsSchema.find({productId: Number(productId)});

  if (updateProduct.length) {
    await productsSchema.updateOne({title: title, password: Number(password)}, {$set: {content: content, status: status}});
  }

  res.json({success: true});

  // if () { // params 값을 입력받지 못한 경우
  //   return res.status(400).json({success:false, message: "데이터 형식이 올바르지 않습니다."});
  // }
  // if () { // productId에 해당하는 상품이 없을 때
  //   return res.status(404).json({success:false, message: "상품 조회에 실패했습니다."});
  // }
  // if () { // body 값을 입력받지 못한 경우
  //   return res.status(401).json({success:false, message: "상품을 수정할 권한이 존재하지 않습니다."});
  // }
});

router.delete("/product/:productId", async(req, res) => {
  // 비밀번호
  const {productId} = req.params;
  const {password} = req.body;

  const deleteProduct = await productsSchema.find({productId: Number(productId), password: Number(password)});

  if(deleteProduct.length) {
    await productsSchema.deleteOne({productId});
  }

  res.json({success: true});


  // 작성자, 상품명 추가로 들어가야 할 듯
  // if () { // params 값을 입력받지 못한 경우
  //   return res.status(400).json({success:false, message: "데이터 형식이 올바르지 않습니다."});
  // }
  // if () { // productId에 해당하는 상품이 없을 때
  //   return res.status(404).json({success:false, message: "상품 조회에 실패했습니다."});
  // }
  // if () { // body 값을 입력받지 못한 경우
  //   return res.status(401).json({success:false, message: "상품을 삭제할 권한이 존재하지 않습니다."});
  // }
});

module.exports = router;
