import express from "express";
const router = express.Router();

import products from "../schemas/product.schema.js";

// 상품 등록 API
// 상품명, 등록 내용, 작성자명, 비밀번호를 request에서 전달받기
// 상품은 두 가지 상태, 판매 중(FOR_SALE)및 판매 완료(SOLD_OUT)
// 상품 등록 시 기본 상태는 판매 중(FOR_SALE)
// /api/products
// POST
// # 400 body를 입력받지 못한 경우
// { errorMessage: '데이터 형식이 올바르지 않습니다.' }



// 상품 목록 조회 API
// 상품명, 작성자명, 상품 상태, 작성 날짜 조회
// 상품 목록은 작성 날짜를 기준으로 내림차순(최신순) 정렬
// /api/products
// GET



// 상품 상세 조회 API
// 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회
// /api/products/:productId
// GET
// # 400 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }
// # 404 productId에 해당하는 상품이 존재하지 않을 경우
// { message: 상품 조회에 실패하였습니다. }



// 상품 정보 수정 API
// 상품명, 작성 내용, 상품 상태, 비밀번호를 request에서 전달받기
// 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글 수정
// 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
// /api/products/:productId
// PUT
// # 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }
// # 404 productId에 해당하는 상품이 존재하지 않을 경우
// { message: 상품 조회에 실패하였습니다. }
// # 401 상품의 비밀번호가 일치하지 않을 경우
// { message: 상품을 수정할 권한이 존재하지 않습니다. }



// 상품 삭제 API
// 비밀번호를 request에서 전달받기
// 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글 삭제
// 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
// /api/products/:productId
// DELETE
// # 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }
// # 404 productId에 해당하는 상품이 존재하지 않을 경우
// { message: 상품 조회에 실패하였습니다. }
// # 401 상품의 비밀번호가 일치하지 않을 경우
// { message: 상품을 삭제할 권한이 존재하지 않습니다. }
