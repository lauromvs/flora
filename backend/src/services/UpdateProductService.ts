import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import AppError from '../errors/AppError';

import uploadConfig from '../config/upload';
import Product from "../models/Products";

interface IRequest {
  id: string;
  name: string;
  image: string;
  amount: number;
  value: number;
}
class UpdateProductService {
  public async execute({ id, name, amount, image, value }: IRequest): Promise<Product> {
    const productsRepository = getRepository(Product);
    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError("Product not found");
    }

    const productImagePath = path.join(uploadConfig.directory, product.image);
    const productImageExists = await fs.promises.stat(productImagePath);

    if (productImageExists) {
      await fs.promises.unlink(productImagePath);
    }

    await productsRepository.save({ id, name, amount, image, value });

    return { id, name, amount, image, value };
  }
}

export default UpdateProductService;
