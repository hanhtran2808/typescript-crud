import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Article.ARTICLE_TABLE_NAME,
})
export class Article extends Model {
  public static ARTICLE_TABLE_NAME = "article" as string;
  public static ARTICLE_ID = "id" as string;
  public static ARTICLE_NAME = "name" as string;
  public static ARTICLE_DESCRIPTION = "description" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Article.ARTICLE_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Article.ARTICLE_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    field: Article.ARTICLE_DESCRIPTION,
  })
  description!: string;
}