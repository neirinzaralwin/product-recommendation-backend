const recommendProductRequest = {
  type: 'object',
  properties: {
    product_name: { type: 'string' },
    num_recommendations: { type: 'number' },
  },
  required: ['product_name', 'num_recommendations'],
};

export { recommendProductRequest };
