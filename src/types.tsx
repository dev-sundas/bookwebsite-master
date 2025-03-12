import { string, z } from "zod";
export type bookType = {
  id: number;
  title: string;
  image_url: string;
  author: string;
  views: string;
  price: string;
  rating: number;
};

export type FooterItemType = { id: number; title: string };

export type ImageType = { id: number; image_url: string };

export type blogType = {
  id: number;
  image_url: string;
  heading: string;
  paragraph: string;
  date: string;
};

export type writerType = {
  id: number;
  name: string;
};

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type loginFormType = z.infer<typeof loginFormSchema>;

export const registerSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmpassword: z.string(),
});

export type registerType = z.infer<typeof registerSchema>;
