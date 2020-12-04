import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Product from '../models/Products';

interface IRequest {
  name: string;
  image: string;
  amount: number;
  value: number;
  available: boolean;
}

class CreateProductService {
  public async execute({ name, amount, image, value, available }: IRequest): Promise<Product> {
    const productsRepository = getRepository(Product);

    const checkProductExists = await productsRepository.findOne({
      where: { name },
    });

    if (checkProductExists) {
      throw new AppError('Product with this name alreary exists.');
    }

    const product = productsRepository.create({ name, image, amount, value, available });
    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
