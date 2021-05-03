const Product = require("../models/ProductSchema");
const url = require('url');
const { isRegExp } = require("util");

//display the product page
exports.displayProduct = (req, res) => {
    Product.find((err,data) =>{
        const message = req.query;
        if(err) throw err;
        res.render('product', {product:data, pageName:'Product', msg:{message}})
    
    })
}

exports.createProducts = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save().then()
        res.redirect(url.format({
            pathname:'/product',
            query:{successMsg:'product added!'}
        })
    )
}

exports.deleteProduct = (req,res) => {
    const productId = req.params.id;
    Product.findByIdAndDelete(productId,(err,doc)=>{
        if(err) throw err;
        res.redirect(url.format({
            pathname:'/product',
            query:{ deleteMsg:'product removed!' }
        }))
    })
}

exports.updateProduct = (req,res) => {
    const productId = req.params.id;
    Product.findByIdAndUpdate(productId, {},(err,doc)=>{
        res.redirect('/')
    })
}