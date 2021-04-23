const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require('../models/category');
const product = require("../models/product");

exports.createProduct = (req, res) => {
    //res.status(200).json({ file: req.files, body: req.body});
    const { name, price, description, category, quantity, createdBy } = req.body;
    let productPictures = [];
    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        });
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description,
        productPictures,
        category,
        quantity,
        createdBy: req.user._id
    });

    product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {

            res.status(201).json({ product });
        }
    });

};

exports.getProductsBySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug: slug })
        .select('_id type')
        .exec((error, category) => {

            if (error) {
                return res.status(400).json({ error });
            }

            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
                        if (error) {
                            return res.status(400).json({ error });
                        }
                        if (category.type) {
                            if (products.length > 0) {
                                res.status(200).json({
                                    products,
                                    productsByPrice: {
                                        under2: products.filter(product => product.price <= 2),
                                        under5: products.filter(product => product.price > 2 && product.price <= 5),
                                        under10: products.filter(product => product.price > 5 && product.price <= 10),
                                        under20: products.filter(product => product.price > 10 && product.price <= 20),
                                        under50: products.filter(product => product.price > 20 && product.price <= 50),
                                        under5000: products.filter(product => product.price > 50 && product.price <= 5000),

                                    }
                                });
                            }
                        }
                        else {
                            res.status(200).json({ products });
                        }

                    });
            }

        });

}

exports.getProductDetailsById = (req, res) => {
    const { productId } = req.params;
    if (productId) {
        Product.findOne({ _id: productId })
            .exec((error, product) => {
                if (error) return res.status(400).json({ error });
                if (product) {
                    res.status(200).json({ product });
                }
            });
    } 
    else {
        return res.status(400).json({ error: 'Params Required' });
    }
}

exports.getProducts = async (req, res) => {
    const products = await Product.find({ createdBy: req.user._id })
        .select("_id name price quantity slug description productPictures category")
        .populate({ path: "category", select: "_id name" })
        .exec();

    res.status(200).json({ products });
}

exports.deleteProductById = (req, res) => {
    const { productId } = req.body.payload;
    if (productId) {
      Product.deleteOne({ _id: productId }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } 
    else {
      res.status(400).json({ error: "Params required" });
    }
  }