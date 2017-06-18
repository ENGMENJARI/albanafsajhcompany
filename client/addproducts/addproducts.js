var app=angular.module('Banafsajh.add',[]);
app.controller('addProductCtrl',function($scope,serv){
	$scope.productadded={};
	$scope.Success = false;
	$scope.fail = false;
	$scope.edited={};
	$scope.editProduct={}
	$scope.productData;
	$scope.definedclient={};
	$scope.showclient={};


	
	$scope.addProduct=function(){
		serv.insertProduct($scope.productadded).then(function(data){
			console.log(data)
			$scope.Success = true;
			$scope.fail = false
			$scope.productadded=data;
			// $scope.productadded={}
			
		})
		.catch(function(error) {
			$scope.fail = true;
			console.error(error);
		});
	},
	$scope.editPro=function(){
		console.log($scope.edited)
		serv.editProduct($scope.edited).then(function(data){
			console.log("done")
			
		})
		
	},
	$scope.removePro=function(){
    serv.removeProduct($scope.edited).then(function(data){
    	console.log(data)
    	console.log('removed success')
    })
	},


	$scope.getPro=function(){
		serv.getProductByName($scope.editProduct).then(function(data){
			
			$scope.productData=data
			console.log($scope.productData)
			
			$scope.edited.name=data.name
			
			$scope.edited.image=data.image
			$scope.edited.description=data.description
			$scope.edited.id=data._id
		})
	},
	//show clients and contacts
	$scope.client={};
$scope.all=[];
$scope.contacts={};
$scope.allcontacts=[];

$scope.addClient=function(){
serv.addingClient($scope.client).then(function(data){
	console.log(data)
})
},
$scope.showClients = function(){
	serv.showAllClients().then(function(clients){
		for (var i = 0; i < clients.length; i++) {
			$scope.all.push(clients[i])
		}
		// console.log($scope.all)
		
	})
},
$scope.getClient=function(){
		serv.showClientByCompanyName($scope.all).then(function(datas){
			
			$scope.showclient=datas
			console.log($scope.showclient)
			$scope.data={};
			for (var i = 0; i < $scope.showclient.length; i++) {
				$scope.data=$scope.showclient[i]
			}
			$scope.definedclient.name=$scope.data.name
			
			$scope.definedclient.email=$scope.data.email
			$scope.definedclient.phone=$scope.data.phone
			$scope.definedclient.companyName=$scope.data.companyName
			$scope.definedclient.id=$scope.data._id
			console.log($scope.definedclient)
		})
	},
$scope.deleteClient = function(){
	serv.removeClient($scope.definedclient).then(function(client){
		console.log(client)
	})
},
// $scope.contact=function(){
// 	serv.addContact($scope.contacts).then(function(data){
		
// 		console.log(data)

// 		// console.log(data)
// 	})
// },
$scope.showAllContacts=function(){
	serv.showContacts().then(function(data){
		for (var i = 0; i < data.length; i++) {
			$scope.allcontacts.push(data[i])
		}
	})
},
$scope.deleteAllContacts=function(){
	serv.removeAllContacts().then(function(data){
		console.log('All Contacts have deleted')
	})
}
});
