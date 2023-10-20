import { Article } from "../model/Article";
import { Op } from "sequelize";

interface FilterOptions {
  name?: string;
  description?: string;
}

interface IArticleRepo {
  save(article: Article): Promise<void>;
  update(article: Article): Promise<void>;
  delete(articleId: number): Promise<void>;
  retrieveById(articleId: number): Promise<Article>;
  retrieveAll(name:string): Promise<Article[]>;
}

export class ArticleRepo implements IArticleRepo {

  async save(article: Article): Promise<void> {
    try {
      await Article.create({
        name: article.name,
        description: article.description,
      });
    } catch (error) {
      throw new Error("Failed to create article!");
    }
  }

  async update(article: Article): Promise<void> {
    try {
      const new_article = await Article.findOne({
        where: {
          id: article.id,
        },
      });
      if (!new_article) {
        throw new Error("Article not found!");
      }
      new_article.name = article.name;
      new_article.description = article.description;

      await new_article.save();
    } catch (error) {
      throw new Error("Failed to create article!");
    }
  }

  async delete(articleId: number): Promise<void> {
    try {
      const new_article = await Article.findOne({
        where: {
          id: articleId,
        },
      });
      if (!new_article) {
        throw new Error("Article not found!");
      }

      await new_article.destroy();
    } catch (error) {
      throw new Error("Failed to create article!");
    }
  }

  async retrieveById(articleId: number): Promise<Article> {
    try {
      const new_article = await Article.findOne({
        where: {
          id: articleId,
        },
      });
      if (!new_article) {
        throw new Error("Article not found!");
      }
      return new_article;
    } catch (error) {
      throw new Error("Failed to create article!");
    }
  }
  
  async retrieveAll(name:string): Promise<Article[]> {
    try {
     return await Article.findAll({
      where: {
        name: {[Op.iLike]: `%${name}%`},
      },
    });
    } catch (error) {
      throw new Error("Failed to create article!");
    }
  }
  
}