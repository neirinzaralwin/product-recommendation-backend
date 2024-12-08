import mongoose from 'mongoose';
import Product from './product';

const registerModels = (mongooseInstance: typeof mongoose) => {
  mongooseInstance.model('Product', Product.schema);
};

export default registerModels;
