import Product, { ProductDocument } from '../../models/product';

class ProductRepository {
  async findAll(): Promise<ProductDocument[]> {
    return await Product.find().limit(20);
  }

  async findByNames(names: string[]): Promise<ProductDocument[]> {
    if (names.length === 0) return [];
    return await Product.find({ product_name: { $in: names } });
  }
}

export default new ProductRepository();
