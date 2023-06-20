const ProductServices = require("../service/product_services")  ;

const getAllProducts = async(req,res) => {
   try {
    let response = await ProductServices.getAllProducts() ; 
    if(response) {
        return res.status(201).json({
            "message" : "Request Successfull" , 
             "result" : response,
        })
    }
    return res.status(401).json({
    message : "Requeest Failed" , 
})
   }
   catch(err) {
    return res.status(501).json({
        "messsage" : "Internal server Error - Request Failed" , 
        "result" : err
    })
   } 
}
const getProductByName =  async(req,res) => {
    try{
        let response = await ProductServices.getProductByName (req.params) ; 
        if(response) { 
            return res.status(201).json({
                "message" : "Request Successfull" , 
                 "result" : response,
            })
        }
        return  res.status(401).json({
            message : "Requeest Failed" , 
        })
    }
    catch(err) {
        return res.status(501).json({
            "message" : "Internal Server Error - Request Failed" , 
            "result" : err
        })
    }
}
const productsInsertion = async(req,res) => {
    try {

        const response = await ProductServices.productsInsertion(req.body)
        if(response) { 
            return res.status(201).json({
                "message" : "Request Successfull" , 
                 "result" : response,
            })
        }
        return  res.status(401).json({
            message : "Requeest Failed" , 
        })
    }
    catch (err) {
        return res.status(501).json({
            "message" : "Internal Server Error - Request Failed" , 
            "result" : err
        })
    }
}

module.exports = {
    getAllProducts , getProductByName , productsInsertion
} 