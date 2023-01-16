import express from 'express';
import router from './routs/user-routs.js';
import { conn } from './database/config.js';

const port = process.env.PORT || 80;
const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);


app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/api/user", router);

app.listen(port, conn(port))
