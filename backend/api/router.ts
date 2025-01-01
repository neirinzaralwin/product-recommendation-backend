import { FastifyInstance } from 'fastify';
import productRoutes from './product/product-routes';

async function registerRoutes(fastify: FastifyInstance) {
  fastify.register(productRoutes, { prefix: '/products' });
}

export default registerRoutes;
