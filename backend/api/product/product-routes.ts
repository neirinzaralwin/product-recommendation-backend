import { FastifyInstance } from 'fastify';
import { recommendProductRequest } from './schemas/params';
import ProductController from './product-controller';

async function productRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      schema: {
        response: {},
      },
    },
    ProductController.getProducts
  );

  fastify.post(
    '/recommend',
    {
      schema: {
        body: recommendProductRequest,
        response: {},
      },
    },
    ProductController.getRecommendedProducts
  );
}

export default productRoutes;
