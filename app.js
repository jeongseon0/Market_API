import express from 'express';
const app = express();
const port = 3001;

// import productsRouter from './routes/products.router.js';
// import connect from './schemas/index.js';
// connect();

// app.use(express.json());
// app.use("/api", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
