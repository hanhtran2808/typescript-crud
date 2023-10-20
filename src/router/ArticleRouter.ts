import BaseRoutes from "./base/BaseRouter";
import ArticleController from "../controller/ArticleController";
import validate from "../helper/validate";
import { createNoteSchema, updateNoteSchema } from "../schema/ArticleSchema";

class ArticleRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createNoteSchema), ArticleController.create);
    this.router.patch(
      "/:id",
      validate(updateNoteSchema),
      ArticleController.update
    );
    this.router.delete("/:id", ArticleController.delete);
    this.router.get("", ArticleController.findAll);
    this.router.get("/:id", ArticleController.findById);
  }
}

export default new ArticleRoutes().router