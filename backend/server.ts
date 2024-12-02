import Fastify, { FastifyInstance } from 'fastify';
import mongoDbPlugin from './plugins/mongo-db-plugin';

const fastify: FastifyInstance = Fastify();

fastify.register(mongoDbPlugin);

const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3031, host: 'localhost' });
    console.info(`Server is listening on http://localhost:3031`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
