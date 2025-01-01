import mongoose, { Model } from 'mongoose';

export interface ProductDocument extends Document {
  uniq_id: string;
  product_url: string;
  product_name: string;
  product_category_tree: string;
  pid: string;
  image: string;
  description: string;
  brand: string;
}

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

productSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.product_category_tree;
    delete ret.uniq_id;
    delete ret.__v;
    return ret;
  },
});

productSchema.set('toObject', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.product_category_tree;
    delete ret.__v;
    return ret;
  },
});

const Product: Model<ProductDocument> = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
