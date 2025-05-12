import { createAxiosInstance } from "./axios-instance";
const apiInstance = createAxiosInstance();

interface IProduct {
  id: number | string;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
}
type IProductUpdatePayload = Partial<Omit<IProduct, "id">>;

const getAllProducts = async () => apiInstance.get("/products");

const getProductById = async (id: string) => apiInstance.get(`/products/${id}`);

const createProduct = (payload: IProduct) =>
  apiInstance.post(`/products`, payload);

const editProduct = (id: number, payload: IProductUpdatePayload) =>
  apiInstance.put(`products/${id}`, payload);

const productService = {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
};

export { productService };
