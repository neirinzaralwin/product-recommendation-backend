import { FastifyReply } from 'fastify';
import ProductRepository from './product-repository';
import { ProductDocument } from '@/backend/models/product';
import RecommendationService from '../../external-services/recommendation-service';
import { RecommendProductRequest } from './types/recommend-product-request';
import { RecommendationResponse } from '../../external-services/types/recommendation_response';

class ProductService {
  async getProducts(reply: FastifyReply): Promise<ProductDocument[]> {
    try {
      return await ProductRepository.findAll();
    } catch (e) {
      console.error('Failed to get products', e);
      throw e;
    }
  }

  async getRecommendedProducts(
    recommendProductRequest: RecommendProductRequest,
    reply: FastifyReply
  ): Promise<ProductDocument[]> {
    const { product_name, num_recommendations } = recommendProductRequest;

    const result: RecommendationResponse = await RecommendationService.getRecommendations(
      product_name,
      num_recommendations
    );

    if (result.status === 'failed') {
      reply.code(500).send({
        message: 'Failed to get recommendations',
      });
    }

    const nameList = result.recommendations.map(r => r.product_name);

    return await ProductRepository.findByNames(nameList);
  }
}

export default new ProductService();
