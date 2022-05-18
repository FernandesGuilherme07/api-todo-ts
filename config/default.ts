import "dotenv/config";

const {
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PORT,
  APP_PORT,
  ENVIRONMENT,
  // DB_ATLAS
} = process.env;

export default {
  // with MongoDB atlas:
  // dbUri: DB_ATLAS

  // with Docker-compose:
  dbUri: `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`,
  env: ENVIRONMENT,
  port: APP_PORT,
};
