import mongoose from "mongoose";

// 상품 정보: 상품명, 작성 내용, 작성자명, 비밀번호, 상품 상태(판매중 or 판매완료), 작성 날짜
const productsSchema = new mongoose.Schema({
  // 상품 ID: 숫자로 된, 필수적인, 고유한 요소
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  // 상품명: 문자로 된, 필수적인
  title: {
    type: String,
    required: true,
  },
  // 작성 내용: 문자로 된, 필수적인
  content: {
    type: String,
    required: true,
  },
  // 작성자명: 문자로 된, 필수적인
  author: {
    type: String,
    required: true,
  },
  // 상품 상태: 문자로 된, 필수적인
  status:{
    type: String,
    required: true,
  },
  // 비밀번호: 숫자로 된, 필수적인
  password: {
    type: Number,
    required: true,
  },
  // 작성 날짜: 문자? 숫자? 객체도 가능할까?, 필수적인
  createdAt: {
    type: Object,
    required: true,
  },
});

export { productsSchema };
