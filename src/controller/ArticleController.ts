import { Request, Response } from "express";
import { Article } from "../model/Article";
import { ArticleRepo } from "../repository/ArticleRepo";

class ArticleController {
  async create(req: Request, res: Response) {
    try {
      const new_article = new Article();
      new_article.name = req.body.name;
      new_article.description = req.body.description;

      await new ArticleRepo().save(new_article);

      res.status(200).json({
        status: "Created!",
        message: "Successfully created article!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new ArticleRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted note!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_article = await new ArticleRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched article by id!",
        data: new_article,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      let filters = req.body.filters;
      let name = '';
      if(filters) {
        if(filters.name) {
          name = filters.name
        }
      }
      const new_article = await new ArticleRepo().retrieveAll(name);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all article data!",
        data: new_article,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_article = new Article();

      new_article.id = id;
      new_article.name = req.body.name;
      new_article.description = req.body.description;

      await new ArticleRepo().update(new_article);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated article data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ArticleController()