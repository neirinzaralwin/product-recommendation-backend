// {
//     "status": "success",
//     "product_name": "Madcaps C38GR30 Men's Cargos",
//     "recommendations": [
//         {
//             "product_name": "Madcaps C31GR30 Men's Cargos",
//             "similarity_score": 0.6732462052987264
//         },
//         {
//             "product_name": "J Marks Multicolor Men's Cargos",
//             "similarity_score": 0.44534021520801104
//         },
//         {
//             "product_name": "Bodymark 768 Men's Cargos",
//             "similarity_score": 0.40161610222003835
//         },
//         {
//             "product_name": "Sports 52 Wear Men's Cargos",
//             "similarity_score": 0.39527563166667234
//         },
//         {
//             "product_name": "Blimey Convertible Men's Cargos",
//             "similarity_score": 0.38865440854700267
//         }
//     ]
// }

export type RecommendationResponse = {
  status: string;
  product_name: string;
  recommendations: ProductRecommendationResponse[];
};

export type ProductRecommendationResponse = {
  product_name: string;
  similarity_score: number;
};
