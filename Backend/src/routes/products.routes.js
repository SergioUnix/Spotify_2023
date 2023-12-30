import { Router } from "express";
import {
  getProducts,
  getAlbums,
  getOneAlbum,



  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/all/albums", getAlbums);
router.get("/all/albums/song/:id", getOneAlbum);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;