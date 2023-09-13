import express, { query, urlencoded } from 'express';
import connectDB from './dbCon.js';
import userRouter from './routes/Routes.js';
import jwt from 'jsonwebtoken';
import jwtMiddleware from './middlewares/index.js';

//JWT token creation
const createToken = () => {
    return jwt.sign("my payload", "my secret");
}
const token = createToken();
console.log(token)


//Express
const app = express();
const PORT = 3000;
//DB connection
connectDB("mongodb://127.0.0.1:27017/Student");

//MIDDLEWARE
//for form submission
app.use(urlencoded({ extended: true }));
//for JWT token verification
app.use(jwtMiddleware);




//ROUTES 
app.use('/student/api', userRouter);

//Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})