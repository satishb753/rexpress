import express from 'express'; //Server
import dotenv from 'dotenv'; //Using to save environment variables inside process.env
// import morgan from 'morgan'; //Logger
import mongoose from 'mongoose';    //For Mongo DB connection
import path from 'path'; //Native

//Routes
import authRoutes from "./routes/api/auth.js";

dotenv.config({path:'./config.env'});   //Importing environment variable from file

const __dirname = path.resolve();


//Mongo DB connection string
const db = `${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`;

//Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })  //Adding new mongodb url parser
    .then(conn=>{
        // console.log(conn.connections);
        console.log("Mongo DB connected!");
    })
    .catch(err=>console.log(err));

const app = express();
app.use(express.json());


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// })


app.use(express.static("build"));
app.use('/api/auth', authRoutes);



// if(process.env.NODE_ENV==="development"){
//     app.use(morgan('dev'));     // Logger Middleware ____ Used only inside development environment
// }
// else{
//     console.log('environment set to production');
// }

export default app;