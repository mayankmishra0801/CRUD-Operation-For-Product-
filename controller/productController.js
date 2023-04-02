const Product = require("../model/Product");


// to get all product 
const product_all =  async (req,res) => {
 
   try{
    const products = await Product.find();
     //product is a variable inside which all data of model Product will get stored, using find() function
    res.json(products); // sending all data in res.json 
  
    }catch(error){
        res.json({message:error});
    }





};

// single Product
const product_details =  async (req,res) => {
   try{
    const product = await Product.findById(req.params.productId);
    res.json(product);

   }catch(error){
    res.json({message:error})
   }


};

// Add new product
const product_create =  async (req,res) => {

    const product = new Product({
        title:req.body.title,
        price:req.body.price,
        image:req.body.image,
        details: req.body.details
    });

    try{
        const saveProduct = await product.save();
        res.send(saveProduct);

    }catch(error){
        res.status(400).send(error);
    }



};

//update product
const product_update =  async (req,res) => {

    try{
        const product = { // it will be an object  which will add all data which will come from body
            title : req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        };
     
        const updatedProduct = await Product.findByIdAndUpdate(
            {
                _id: req.params.productId
            },
            product
        );
        res.json(updatedProduct);

        

    } catch(error){
        res.json({message:error});
    }


};
//Delete product

const product_delete =  async (req,res) => {
 
    try{
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
        
    }catch(error){
        res.json({message:error});
        }
    

};


module.exports = {

    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}