import imagekit from "../config/imagekit.js";
import fs from "fs";
import productModel from '../models/productModel.js'

// fuction for adding product
const addProduct = async (req, res) => {
  try {

    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    } = req.body;

    const image1 = req.files?.image1?.[0]
    const image2 = req.files?.image2?.[0]
    const image3 = req.files?.image3?.[0]
    const image4 = req.files?.image4?.[0]

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const file = fs.readFileSync(item.path);

        const result = await imagekit.upload({
          file,
          fileName: item.filename,
          folder: "/products",
        });

        // Delete local file after upload
        fs.unlinkSync(item.path);

        return result.url;
      })
    );


    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === 'true',
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now()
    }


    const product = new productModel(productData);
    await product.save();


    res.json({ success: true, message: "Product Added" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}


// function for list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({
      success: true,
      products
    });

  } catch (error) {
   
    res.json({
      success: false,
      message: error.message
    });
  }

}

// function for removing product
const removeProduct = async (req, res) => {
  try {

    await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "Product removed" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }

}

// function for single  product
const singleProduct = async (req, res) => {
  try {

    const { productId } = req.body
    const product = await productModel.findById(productId)
    res.json({ success: true, product })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })

  }

}

export { addProduct, listProduct, removeProduct, singleProduct };


