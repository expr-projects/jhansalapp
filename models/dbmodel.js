var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var productSchema = new Schema({
      productUUID          : { type: String}
    , productName          : { type: String}
    , price         			 : { type: Number}
    , quantity      			 : { type: Number}
    , productDescription   : { type: String}
    , brand         			 : { type: String}
    , expiryDate    			 : { type: Date}
    , mfgDate       			 : { type: Date}
    , productImage         : { type: String}
});

var productSchema=mongoose.model('product',productSchema);

module.exports = {
  Product      : productSchema
};
