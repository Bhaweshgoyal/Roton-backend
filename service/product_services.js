const { Products } = require("../models");
const getAllProducts = async () => {
  try {
    const response = await Products.findAll();
    return response;
  } catch (err) {
    return err;
  }
};

const getProductByName = async (name) => {
  try {
    const response = await Products.find({
      where: {
        name: name,
      },
    });

    return response;
  } catch (err) {
    return err;
  }
};
const productsInsertion = async(productDetails) => {
    try{
        const response = await Products.create({
            name : productDetails.name , 
            description : productDetails.description , 
            price : productDetails.price ,
            imgSrc : productDetails.src
        })

     return response
    } 
    catch(err){
        return err
    }
 }
module.exports = {
  getAllProducts, productsInsertion , getProductByName
};
