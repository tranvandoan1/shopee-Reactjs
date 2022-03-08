import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cate_id: {
        type: ObjectId,
        ref: 'categories',
    },
    shop_id: {
        type: String
    },
    price: {
        type: Number
    },
    detail: {
        type: String
    },
    cover_image: {
        type: String,
    },
    photo1: {
        type: String
    },
    photo2: {
        type: String
    },
    photo3: {
        type: String
    },
    photo4: {
        type: String
    },
    view: {
        type: Number
    },
    review: {
        type: Number
    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number
    },
    description: {
        type: String
    },
    sale: {
        type: Number
    },
    origin: {
        type: String
    },
    brand: {
        type: String
    },
    warehouse: {
        type: String
    },
    sent_from: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('products', productSchema);