const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require('../models/category');

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
        .select('_id')
        .exec((error, category) => {

            if (error) {
                return res.status(400).jason({ error });
            }

            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
                        if (error) {
                            return res.status(400).jason({ error });
                        }
                        if (products.length > 0) {
                            res.status(200).json({
                                products,
                                productsByPrice: {
                                    under2: products.filter(product => product.price <= 2),
                                    under5: products.filter(product => product.price > 2 && product.price <= 5),
                                    under10: products.filter(product => product.price > 5 && product.price <= 10),
                                    under20: products.filter(product => product.price > 10 && product.price <= 20),
                                    under50: products.filter(product => product.price > 20 && product.price <= 50),
                                    under5000: products.filter(product => product.price > 50 && product.price <= 5000 ),

                                }
                            });
                        }

                    });
            }

        });

}