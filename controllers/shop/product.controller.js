import { catchAsync } from "../../middlewares/catchAsync";
import { cloudConfig } from "../../utils/cloudConfig";
import cloudinary from "cloudinary";
import Product from "../../models/shop/product";
import APIFeature from "../../utils/apiFeature";
import HandlerError from "../../utils/handlerError";

cloudConfig();
// create product => /api/shops/products
export const newProduct = catchAsync(async (req, res, next) => {
  let imageLinks = [];
  if (req.body.images) {
    for (let i = 0; i < req.body.images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(req.body.images[i], {
        folder: "my_shop/products",
      });

      imageLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  }

  req.body.images = imageLinks;
  req.body.createdBy = req.secure_url._id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// get all products with search sort filter paginate
// => /api/shops/products
export const getAllProducts = catchAsync(async (req, res, next) => {
  const totalProducts = await Product.countDocuments();
  const apiFeature = new APIFeature(Product.find(), req.query)
    .search()
    .filter()
    .limitField()
    .sort()
    .paginate();

  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    totalProducts,
    result: products.length,
    products,
  });
});

// get one product by name slug => /api/shops/products/:slug
export const getProductBySlug = catchAsync(async (req, res, next) => {
  const { slug } = req.query;
  const product = await Product.findOne({ slug });

  if (!product) return next(new HandlerError("That product do not exist", 404));

  res.status(200).json({
    success: true,
    product,
  });
});

// get products sale => /api/shops/products/sales
export const getSalesProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({ sales: { $gt: 0 } }).limit(10);

  if (!products || products.length === 0)
    return next(new HandlerError("No sales products", 404));

  res.status(200).json({
    success: true,
    result: products.length,
    products,
  });
});
