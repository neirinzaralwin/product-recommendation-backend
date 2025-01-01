export const ProductsResponseSuccessSchema = {
  type: 'object',
  properties: {
    products: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          price: { type: 'number' },
          description: { type: 'string' },
        },
      },
    },
  },
};
