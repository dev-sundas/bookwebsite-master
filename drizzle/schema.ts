import {
  serial,
  text,
  pgTable,
  boolean,
  date,
  integer,
} from "drizzle-orm/pg-core";

export const mySchemaUsers = pgTable("users", {
  id: serial("id").primaryKey(),
  title: text("title"),
  author: text("author"),
  image_url: text("image_url"),
  views: text("views"),
  price: integer("price"),
  rating: integer("rating"),
  isactive: boolean("isactive").default(true),
  isverified: boolean("isverified").default(false),
  createdat: date("createdat").default(new Date().toISOString()),
  updatedat: date("updatedat").default(new Date().toISOString()),
});
