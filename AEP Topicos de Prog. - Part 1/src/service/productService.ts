import { writeFile, readFile } from "fs/promises";

class ProductService {
  async createProducts(product: any) {
    try {
      await writeFile("products.json", JSON.stringify(product, null, 2));
    } catch (err) {
      throw new Error("Falha ao salvar a lista de produtos");
    }
  }

  async listProducts() {
    try {
      const list = await readFile("products.json", "utf-8");
      return JSON.parse(list);
    } catch (error) {
      throw new Error("Falha ao acessar a lista de produtos");
    }
  }

  async getStock() {
    try {
      const list = await this.listProducts();
      
      const listStockProducts = list.map(produto => {
        let stock = {
          nome: produto.nome,
          qtde: produto.qtde,
          preco: produto.preco,
          valor_stock: produto.qtde * produto.preco
        }
        return stock;
      })
      return listStockProducts;
    } catch (error) {
      throw new Error("Falha ao acessar a lista de produtos");
    }
  }
}

export default new ProductService();
