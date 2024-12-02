import fastifyPlugin from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import mongoose from 'mongoose';

async function plugin(fastify: FastifyInstance): Promise<void> {
  try {
    await mongoose.connect('mongodb://localhost:27017/ai');
    console.info('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
}

export default fastifyPlugin(plugin);
