import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Product from "../models/Products";

interface IRequest {
  id: string;
  name: string;
  amount: number;
  value: number;
  available: boolean;
}
class UpdateProductService {
  public async execute({ id, name, amount, value, available }: IRequest): Promise<Product> {
    const productsRepository = getRepository(Product);
    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError("Product not found");
    }

    const updatedProduct = {
      ...product,
      name,
      amount,
      value,
      available
    }

    await productsRepository.save(updatedProduct);

    return updatedProduct;
  }
}

export default UpdateProductService;
