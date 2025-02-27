import express from "express";
import { categoryController } from "../controllers/categoryController";
import { isAdmin } from "../middleware";

const categoryRouter = express.Router();

categoryRouter.post("/categories", isAdmin, categoryController.addCategory);
categoryRouter.patch(
  "/categories/:categoryId",
  isAdmin,
  categoryController.setCategory,
);
// 페이지네이션 구현하기 -> 무한스크롤로 바꿀까?
categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/categories/:categoryId", categoryController.getCategory);
categoryRouter.delete(
  "/categories/:categoryId",
  isAdmin,
  categoryController.deleteCategory,
);

export default categoryRouter;
