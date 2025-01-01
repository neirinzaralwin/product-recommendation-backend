import axios, { AxiosResponse } from 'axios';
import { RecommendationResponse } from './types/recommendation_response';

export class RecommendationService {
  async getRecommendations(
    productName: string,
    numberOfRecommendations: number
  ): Promise<RecommendationResponse> {
    try {
      const requestBody = {
        product_name: productName,
        num_recommendations: numberOfRecommendations,
      };

      const response: AxiosResponse = await axios.post(
        'http://127.0.0.1:8000/predict',
        requestBody
      );

      return response.data as RecommendationResponse;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error('Error in recommending models', e.response?.data || e.message);
      } else {
        console.error('Unexpected error:', e);
      }
      const customResponse = {
        status: 'failed',
        product_name: productName,
        recommendations: [],
      };
      return customResponse;
    }
  }
}

export default new RecommendationService();
