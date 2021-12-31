import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config({path:'./config.env'});
const app = express();

if(process.env.NODE_ENV==="development"){
    // Logger Middleware ____ Only inside development environment
    app.use(morgan('dev'));
}
else{
    console.log('environment set to production');
}

export default app;