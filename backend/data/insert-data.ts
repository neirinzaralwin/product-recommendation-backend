import { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';
import { parse } from 'fast-csv';

export const insertData = async (fastify: FastifyInstance): Promise<void> => {
  const Product = fastify.mongoose.model('Product');
  const data = await Product.find();

  if (data.length === 0) {
    console.log('Inserting data ...');

    const results: unknown[] = [];
    const filePath = path.join(__dirname, 'data.csv');

    fs.createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on('data', row => {
        const filteredRow = {
          uniq_id: row.uniq_id,
          product_url: row.product_url,
          product_name: row.product_name,
          product_category_tree: row.product_category_tree,
          pid: row.pid,
          image: row.image,
          description: row.description,
          brand: row.brand,
        };
        results.push(filteredRow);
      })
      .on('end', async () => {
        try {
          await Product.insertMany(results);
          console.log('Data successfully inserted');
        } catch (error) {
          console.error('Error inserting data:', error);
        }
      });

    console.log('File path -> ', filePath);
  } else {
    console.log('Data already exists');
  }
};
