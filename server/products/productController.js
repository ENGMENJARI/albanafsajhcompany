let Product = require('./productModel.js');
let Feed = require('../feed/feed.js')
var nodemailer = require('nodemailer');

module.exports = {
  
  getAllProducts: function(req, res) {
        Product.find({}, function(err, AllProducts) {
            if(err) {
                res.status(500).send('err');
            }else{
                res.json(AllProducts);
            }
        });
    },
    // getAllProduct: function(req, res) {
    //     Product.find({name: req.params.name}, function(err, AllMobile) {
    //         if(err) {
    //             res.status(500).send('err');
    //         }else{
    //             res.json(AllMobile);
    //         }
    //     });
    // },
    insertProduct: function(req, res) {
        Product.findOne({name: req.body.name})
        .exec(function(err, product) {

            if(product) {
                res.json(new Error('product already exists'));
            }else{
                let newProduct = new Product({
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description
                });
                newProduct.save(function(err, newProduct) {
                    
                           if(err) {
                res.status(500).send('err');
              }else{
                res.json(newProduct);
              }

                            
                          
                      })
                        
                    }
                });
            },
        
    editProduct : function(req,res){
      console.log(req.body)
      var id=req.body.id;
      delete req.body['id'];
      
      Product.update({_id:id},req.body,function(err,data){
        if (err){
          res.json(err)
        }else{
          res.json("updated done!!")
        }
      })
      
      
  },
  removeProduct :function(req,res){
    console.log(req.body)
      var id=req.body.id;
      Product.remove({_id:id},function(err,done){
        if (err){
          res.json(err)
        }else{
          res.json("Removed done!!")
        }
      })

  },
  getProduct:function(req,res){
    var name=req.params.name;
    console.log(name)
    Product.findOne({name:name},function(err,product){
      console.log(product)
      if(err) {
                res.status(500).send('err');
            }else{
                res.json(product);
            }
    })
  }
};
