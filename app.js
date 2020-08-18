const express = require('express');
// để dùng đc các biến trong file .env
require('dotenv').config();
const mongoose = require('mongoose');
// import morgan
const morgan = require('morgan');
// import body-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const historyRoutes = require('./routes/history');
const expressValidator = require('express-validator');

const {ktuser}=require('./controllers/user')

const path=require('path');
// app
const app = express();
// db



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB Connected'));


// middlewares
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));


app.use(bodyParser());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// routes middleware
app.use("/",indexRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/history",historyRoutes);

app.post('/api/checkUser',ktuser)

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});