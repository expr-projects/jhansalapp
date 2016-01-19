var express = require('express');
var router = express.Router();
var Product = require('../models/dbmodel').Product;

router.get('/', function(request, response) {

    response.render('product.ejs',{message : ''});
});
router.get('/data', function(request, response) {

  Product.find().exec(function(req ,res,next){
      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(res));
    });
});
//post format for aboutSchema
// {
//      "headingtext" : "entertainment"
//     ,"details" : ""
//     ,"imageUrl" :""
//
// }
router.post('/', function(request, response) {
  var   newProductSchema = new Product();
        newProductSchema.productUUID = request.body.productUUID;
        newProductSchema.productName = request.body.productName;
        newProductSchema.price       = request.body.price;
        newProductSchema.quantity    = request.body.quantity;
        newProductSchema.productDescription = request.body.productDescription;
        newProductSchema.brand       = request.body.brand;
        newProductSchema.expiryDate  = request.body.expiryDate;
        newProductSchema.mfgDate     = request.body.mfgDate;
        newProductSchema.productImage = request.body.productImage;

        newProductSchema.save(function (err) {

          if (err){
            //logger.error(message + '400 | Database insertion failed');
          //  return next(err);
            response.render('product.ejs',{message :'DB insertion failed'});
          }
          else {
            response.render('product.ejs',{message :'Successfully Updated'});
          }
        });

});

module.exports = router;
