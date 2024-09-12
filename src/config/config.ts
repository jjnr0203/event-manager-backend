import { registerAs } from '@nestjs/config';

export const config = registerAs('config', () => ({
  port: parseInt(process.env.PORT),
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
  },
}));
