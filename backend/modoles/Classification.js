import mongoose from 'mongoose';

const Classification = new mongoose.Schema({
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
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    }

}, { timestamps: true });
module.exports = mongoose.model('classify', Classification);