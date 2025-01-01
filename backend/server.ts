import Fastify, { FastifyInstance, FastifySchema } from 'fastify';
import mongoosePlugin from './plugins/mongo-db-plugin';
import { insertData } from './data/insert-data';
import registerRoutes from './api/router';
import Ajv from 'ajv';

const fastify: FastifyInstance = Fastify();
const ajv = new Ajv({
  allErrors: true,
  useDefaults: false,
  removeAdditional: false,
  coerceTypes: false,
});

const compileSchema = (schema: FastifySchema) => {
  const validate = ajv.compile(schema);
  return (data: unknown) => {
    const isValid = validate(data);
    if (!isValid) {
      throw new Error(`Response schema validation error: ${ajv.errorsText(validate.errors)}`);
    }
    return JSON.stringify(data);
  };
};

fastify.register(mongoosePlugin);
fastify.setSerializerCompiler(({ schema }) => compileSchema(schema));
fastify.register(registerRoutes);

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
