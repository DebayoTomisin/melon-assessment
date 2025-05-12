import * as Yup from "yup";

export const createProductSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().min(10).required(),
  price: Yup.number().positive().required(),
  category: Yup.string().required(),
  image: Yup.string().url().required(),
});

export type ProductFormData = Yup.InferType<typeof createProductSchema>;
