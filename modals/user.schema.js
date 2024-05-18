import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    role: String,
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: "Products"}],
    wishlist: [ {type: mongoose.Schema.Types.ObjectId, ref: "Products"} ]
});

const UserSchema = mongoose.model("Users", userSchema);

export default UserSchema;