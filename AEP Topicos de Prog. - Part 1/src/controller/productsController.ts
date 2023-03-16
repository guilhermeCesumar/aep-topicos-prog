import { Request, Response } from "express";
import productService from "../service/productService";

class ProductsController {
  async create(req: Request, res: Response) {
    productService.createProducts(req.body);
    return res.status(201).send();
  }

  async read(req: Request, res: Response) {
    const listProducts = await productService.listProducts();
    return res.status(200).send(listProducts);
  }

  async getStock(req: Request, res: Response) {
    const stockList = await productService.getStock();
    return res.status(200).send(stockList);
  }
}

export default new ProductsController();
