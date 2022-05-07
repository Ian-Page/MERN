const mongoose = require("mongoose");

const ProductSchema= new mongoose.Schema({
    
    title:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    }
 //_id is created 
}, {timestamps: true})

const Product = mongoose.model("Product",ProductSchema);

module.exports= Product;

