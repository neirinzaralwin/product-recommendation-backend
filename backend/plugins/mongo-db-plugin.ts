import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import { FastifyPluginAsync } from 'fastify';
import registerModels from '../models';

interface MongoosePluginOptions {
  uri?: string;
  options?: mongoose.ConnectOptions;
}
declare module 'fastify' {
  interface FastifyInstance {
    mongoose: typeof mongoose;
  }
}

const mongoosePlugin: FastifyPluginAsync<MongoosePluginOptions> = async (fastify, options) => {
  const uri = options.uri || 'mongodb://localhost:27017/ai';
  const mongooseInstance = await mongoose.connect(uri, {
    ...options.options,
  });

  registerModels(mongooseInstance);

  fastify.decorate('mongoose', mongooseInstance);

  fastify.addHook('onClose', async instance => {
    await mongooseInstance.disconnect();
  });
  console.info('Connected to MongoDB');
};

export default fp(mongoosePlugin, {
  name: 'fastify-mongoose',
});
