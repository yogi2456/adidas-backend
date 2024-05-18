// import { Schema } from "mongoose";
import ProductSchema from "../modals/product.schema.js";

export const AddProduct = async (req, res) => {
    try {
        const { name, category, price, quantity, tags, image} = req.body.productData;
        if(!name || !category || !price || !quantity || !tags || !image) {
            return res.status(401).json({ success: false, message: "All fields are required.."})
        }

        const {userId} = req.body;

        // const { error } = Schema.validate(req.body);

        // if(error){
        //     const errorDetails = error.details.map(d => d.message).join('<br>');
        //     res.send(`<h2>Validation Error:</h2>${errorDetails}`)
        //     return;
        // }

        const newProduct = await ProductSchema({
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            tags: tags,
            user: userId,
            image: image
        });

        await newProduct.save();

        return res.status(200).json({ success: true, message: "Product successfully added.."})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}

export const GetProductsByCategoryPrice = async (req, res) => {
    try {
        const pipeline = [
            {
                $match: { category: "electronics", price: { $gt: 9000 } }
              },
              {
                $group: {
                  _id: "$product",
                  totalQuantity: { $sum: "$quantity" },
                  totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
              }
            
        ];

        const product = await ProductSchema.aggregate(pipeline)

        console.log(product, "product")

        return res.status(200).json({success: true, message: "Products Aggregated", data: product})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}

export const Projecting = async (req, res) => {
    try {
        const aggregation = [
            {$unwind: "$tags"},
            {$project: { name: 1, price: 1} }
        ]

        const filterProducts = await ProductSchema.aggregate(aggregation);
        console.log(filterProducts, "filterProducts")
        return res.status(200).json({success: true, message: "Products are unminding and projecting"})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}

export const GetProductBySeller = async (req, res) => {
    try {
        const { userId } = req.body;
        const products = await ProductSchema.find({ user: userId }).populate(
          "user"
        );
        return res.json({ success: true, products})
      } catch (error) {
        console.log(error);
        return res.json({ success: false, error });
      }
}

export const GetAllProduts = async (req, res) => {
    try {
        const products = await ProductSchema.find({});
        return res.json({ success: true, products})
    } catch (error) {
        return res.json({ success: false, error})
    }
}