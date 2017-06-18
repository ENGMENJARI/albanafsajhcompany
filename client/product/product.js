var app = angular.module('Banafsajh.Product', []);

app.controller('ProductCtrl', function($scope, serv,$window) {
	$scope.Products=[];
	
	$scope.product = [];
	$scope.signinFirst = false;
	

	$scope.getProduct = ()=> {
		serv.getAllProducts().then((data)=> {
			
			for(let i = 0; i< data.length; i++) {
				$scope.Products.push(data[i]);
				
			}
		})
		.catch((error)=> {
			console.error(error);
		});
	};
	

	


	

	$scope.viewProduct = (id)=>{
		var mop = $scope.Products;

		for(var i = 0; i< mop.length ; i++){
			if(id === mop[i]._id){
				$scope.product = mop[i];
			}
		}
	}
});
