import mongoose from 'mongoose';

const CommodityValue = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    condition: {
        type: Number,
        required: true,
        trim: true
    },
    pro_id: {
        type: String,
        trim: true,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
}, { timestamps: true });
module.exports = mongoose.model('commodityvalues', CommodityValue);