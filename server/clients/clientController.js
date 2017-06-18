var Client = require('./clientModel.js');
module.exports ={
addingClient : function(req,res){
	Client.findOne({email: req.body.email})
        .exec(function(err, client) {

            if(client) {
                res.json(new Error('You Already cntact us'));
            }else{
                let newClient = new Client({
                    name: req.body.name,
                    companyName: req.body.companyName,
                    phone: req.body.phone,
                    email:req.body.email
                });
                newClient.save(function(err, newclient) {
                    
                           if(err) {
                res.status(500).send('err');
              }else{
                res.json(newclient);
              }

                            
                          
                      })
                        
                    }
                });
},
showAllClients:function(req,res){
	Client.find({},function(err,clients){
		if(err) {
                res.status(500).send('err');
              }else{
                res.json(clients);
              }
	})
},
getClientByCompanyName:function(req,res){
  var companyName=req.params.companyName
  Client.find({companyName:companyName},function(err,founded){
    if(err){
      res.status(500).send('err')
    }else{
      res.json(founded)
    }
  })
},
deleteByClientCompanyName:function(req,res){
  var id=req.body.id
  Client.remove({_id:id},function(err,client){
    if(err){
      res.status(500).send('err')
    }else{
      res.json(client)
    }
  })
}


}