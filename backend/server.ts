import Fastify, { FastifyInstance } from 'fastify';
import mongoosePlugin from './plugins/mongo-db-plugin';
import { insertData } from './data/insert-data';

const fastify: FastifyInstance = Fastify();

fastify.register(mongoosePlugin);

const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3031, host: 'localhost' });
    console.info(`Server is listening on http://localhost:3031`);
    await insertData(fastify);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();
