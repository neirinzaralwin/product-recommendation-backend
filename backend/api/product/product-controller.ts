import { FastifyReply, FastifyRequest } from 'fastify';
import ProductService from './product-service';
import { RecommendProductRequest } from './types/recommend-product-request';

class ProductController {
  async getProducts(request: FastifyRequest, reply: FastifyReply): Promise<any> {
    try {
      const products = await ProductService.getProducts(reply);
      return { products };
    } catch (error) {
      reply.code(500).send({ message: 'Failed to get products' });
    }
  }

  async getRecommendedProducts(request: FastifyRequest, reply: FastifyReply): Promise<any> {
    try {
      const products = await ProductService.getRecommendedProducts(
        request.body as RecommendProductRequest,
        reply
      );
      return { products };
    } catch (error) {
      reply.code(500).send({ message: 'Failed to get recommended products' });
    }
  }
}

export default new ProductController();
