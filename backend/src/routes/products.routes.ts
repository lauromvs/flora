import { Router } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'uuid'
import multer from 'multer';
import uploadConfig from '../config/upload';

// import AppError from '../errors/AppError';
import Product from '../models/Products';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

const productsRouter = Router();
const upload = multer(uploadConfig);

productsRouter.get('/', async (req, res) => {
  const productsRepository = getRepository(Product);
  const products = await productsRepository.find();
  return res.json(products);
});

productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  const productsRepository = getRepository(Product);
  const product = await productsRepository.findOne(id);
  if (!product) {
    return res.status(400).json({ error: "Product not found" })
  }
  return res.json(product);
});

productsRouter.post('/', upload.single('image'), async (req, res) => {
  const { name, amount, value } = req.body;

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({
    name,
    image: req.file.filename,
    amount,
    value
  });

  return res.json(product);
});

productsRouter.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { name, amount, value } = req.body;

  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid id" });

  }
  const updateProduct = new UpdateProductService();

  const updatedProduct = await updateProduct.execute({
    id,
    name,
    image: req.file.filename,
    amount,
    value
  })

  return res.json(updatedProduct);
});

productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!validate(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  const deleteProduct = new DeleteProductService();

  await deleteProduct.execute(id);

  return res.status(204).send();
});

export default productsRouter;
