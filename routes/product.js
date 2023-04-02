const router = require("express").Router();
const productController = require('../controller/productController');




router.post("/",productController.product_create);   
router.get("/",productController.product_all);   // to get all data
router.get("/:productId",productController.product_details);  // to get single data from servee
router.put("/:productId",productController.product_update);  // to update data 
router.delete("/:productId",productController.product_delete);  //to delete








module.exports = router;

