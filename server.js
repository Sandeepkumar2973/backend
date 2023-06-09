const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
var cors = require('cors')
 const path = require('path');
 const app = express();


//dotenv--
dotenv.config();

// mongodb coonectio========
connectDB();
app.use(cors());


// rest object----

 //middlewares----------
 app.use(express.json());

 app.use(morgan('dev'));

 //routes----


app.use('/api/user', require('./routes/userRoutes'));


app.use(express.static(path.join(__dirname, './react-portfolio-master/build')))
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "./react-portfolio-master/build/index.html"));
});
 // port---
 const port = process.env.PORT || 8080


    app.get('/', (req, res) => {
        res.send('hello')
    });
 //listen port-----
 app.listen(port, ()=>{
    console.log(
        `server is running on >>>>${process.env.NODE_MODE}${port}`
    )
 })