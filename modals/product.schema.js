import mongoose, { Schema } from "mongoose";
// import joi from 'joi';


const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
    image: String,
    tags: [String],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

// const ProductSchema2 = joi.object({
//     name: joi.string().required(),
//     category: joi.string().required(),
//     price: joi.number().required(),
//     quantity: joi.number().required().min(10).max(3000),
//     tags: joi.array().items(joi.string()).required().min(1),
// })

const ProductSchema = mongoose.model("products", productSchema);

export default ProductSchema;