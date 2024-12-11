import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/product.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    author: "dev",
    desc: "products api",
    version: "1.0.0",
    name: "node-api-products",
  });
});

app.use("/products", productsRoutes);

export default app;
