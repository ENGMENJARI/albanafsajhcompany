var Contacts=require('./contactusModel.js')

module.exports={
	addContact :function(req,res){
		
				var newContact =new Contacts({
					name:req.body.name,
					email:req.body.email,
					phone:req.body.phone,
					message:req.body.message
				})
				newContact.save(function(err, newcontact) {
                    
                           if(err) {
                res.status(500).send('err');
              }else{
                res.json(newcontact);
              }

                            
                          
                      })
			},
		
	

showContact:function(req,res){
	Contacts.find({},function(err,contacts){
		if(err){
			res.status(500).send('err')
		}else{
			res.json(contacts)
		}
	})
},
deleteAllContacts:function(req,res){
Contacts.remove({},function(err,allcontacts){
	if(err){
		res.status(500).send('err')
	}else{
		res.json(allcontacts)
	}
})
},
}
