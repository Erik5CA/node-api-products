import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { createRoles } from "./libs/initalSetup.js";

const app = express();
createRoles();
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

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
