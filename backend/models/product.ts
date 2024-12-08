import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  uniq_id: { type: String, required: true },
  product_url: { type: String },
  product_name: { type: String },
  product_category_tree: { type: String },
  pid: { type: String },
  image: { type: String },
  description: { type: String },
  brand: { type: String },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
