var app=angular.module('Banafsajh.main',[]);
app.controller('mainCtrl',function($scope, serv,$window){
    $scope.Products;
	$scope.product = [];
	$scope.feeds = {};
	$scope.getAllProducts = ()=> {
		serv.getAllProducts().then((data)=> {
			$scope.Products = [];
			var len = data.length
			for(let i = len-1; i>= len-3; i--) {
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
				$scope.product= mop[i];
			}
		}
	};

	
});


