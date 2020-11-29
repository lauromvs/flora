import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Product from "../models/Products";

import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const productsRepository = getRepository(Product);

    const checkProductExists = await productsRepository.findOne(id);
    if (!checkProductExists) {
      throw new AppError("Product not found");
    }

    const productImagePath = path.join(uploadConfig.directory, checkProductExists.image);
    const productImageExists = await fs.promises.stat(productImagePath);

    if (productImageExists) {
      await fs.promises.unlink(productImagePath);
    }

    productsRepository.delete(id);
  }
}

export default DeleteProductService;
