import apiInstance from "../API/instance";
import { createFormData } from "../utils/index";
class Product {
  async CreateProduct(data) {
    const _data = createFormData(data);

    const res = await apiInstance.post(`products/add`, _data);
    return res;
  }
  async UpdateProduct({ data, productId }) {
    const _data = createFormData(data);
    const res = await apiInstance.put(`/products/${productId}`, _data);
    return res;
  }
}

export const product = new Product();
