import * as joi from 'joi';
import 'dotenv/config';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    GOOGLE_CLIENT_ID: joi.string().required(),
    GOOGLE_SECRET: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().port(),
    DB_NAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_USER: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    CLOUD_NAME:joi.string().required(),
    CLOUDINARY_SECRET:joi.string().required(),
    CLOUDINARY_KEY:joi.string().required(),
  })
  .unknown(true);

const { error, value: envVars } = envsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation errors:${error.message}`);
}

export const envs = {
  port: envVars.PORT,
  googleClientId: envVars.GOOGLE_CLIENT_ID,
  googleSecret: envVars.GOOGLE_SECRET,
  database: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    database: envVars.DB_NAME,
    password: envVars.DB_PASSWORD,
    username: envVars.DB_USER,
  },
  jwtSecret: envVars.JWT_SECRET,
  cloudinary:{
    name:envVars.CLOUD_NAME,
    cloudinarySecret:envVars.CLOUDINARY_SECRET,
    cloudinaryKey:envVars.CLOUDINARY_KEY,    
  }
};
