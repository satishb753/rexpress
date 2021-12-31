import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path:'./dev-data/config.env'});
const app = express();

console.log(process.env.NODE_ENV);

export default app;