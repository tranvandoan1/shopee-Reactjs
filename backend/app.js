import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import categoryRoutes from './routes/categoris';
import productRoutes from './routes/Products';
import authRoutes from './routes/Auth';
import userRoutes from './routes/Users';
import saveuserRoutes from './routes/SaveUser';
import saveoderRoutes from './routes/SaveOder';
import InfoUserRoutes from './routes/InfoUser';
import OderRoutes from './routes/Oder';
import OderDetailRoutes from './routes/OderDetail';
import CommentRoutes from './routes/Comments';
import StatisticalRoutes from './routes/Statistical';
import ContactRoutes from './routes/Contacts';
import SlidesRoutes from './routes/Slides';
import ShopOwnerCateRoutes from './routes/ShopOwnerCate';
import TypeGroupNameRoutues from './routes/TypeGroupName';
import ClassificationRoutues from './routes/Classification';
import CommodityValueRoutues from './routes/CommodityValue';
import ShopOwnerRoutes from './routes/ShopOwner';


const app = express();
dotenv.config();
app.use(express.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(expressValidator());

//Connection
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        createIndex: true
    }).then((err) => {
        console.log('thành công!')
    })
    .catch(error => console.log(error.message))

mongoose.connection.on('error', err => {
    console.log(`data connect failed, ${err.message}`);
})


// routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', ShopOwnerCateRoutes);
app.use('/api', ShopOwnerRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.use('/api', saveuserRoutes);

app.use('/api', saveoderRoutes);

app.use('/api', InfoUserRoutes);
app.use('/api', OderRoutes);
app.use('/api', OderDetailRoutes);
app.use('/api', CommentRoutes);
app.use('/api', StatisticalRoutes);
app.use('/api', ContactRoutes);
app.use('/api', SlidesRoutes);
app.use('/api', TypeGroupNameRoutues);
app.use('/api', CommodityValueRoutues);
app.use('/api', ClassificationRoutues);



// listen
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('Thanh cong', port);
})