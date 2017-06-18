angular.module('Banafsajh.services', [])

.factory('serv', ($http, $location, $window)=> {
	return {
        getAllProducts: ()=> {
			return $http({
				method: 'GET',
				url: '/api/productsAll/'
			})
			.then((resb)=> {
				return resb.data;
			});
		},

		getProductByName: (product)=> {
			return $http({
				method: 'GET',
				url: '/api/getproduct/'+ product.name
			})
			.then((resb)=> {
				return resb.data;
			});
		},

		insertProduct:function(mobile){
			return $http({
				method:'POST',
				url: 'api/products/',
				data:mobile
			})
			.then(function(resp){
				return resp.data
			})
		},

		// getProduct:function(mobilename){
		// 	console.log(mobilename)
		// 	return $http({
		// 		method:'GET',
		// 		url:'/api/getproduct/'+ mobilename.name 
		// 	})
		// 	.then(function(resp){
		// 		return resp.data
		// 	})
		// },

		editProduct :function(mobile){
			return $http({
				method:'PUT',
				url:'/api/edit/',
				data:mobile
			})
			.then(function(resp){
				return resp.data
			})
		},

		removeProduct :function(product){
         return $http({
         	method:'POST',
				url:'/api/remove/',
				data:product
         })
         .then(function(resp){
				return resp.data;
			})
		},
		addContact:(form)=>{
			return $http({
				method: 'POST',
				url: '/api/addcontact/',
				data: form

			})
			.then(function(resp){
				return resp.data;
			})
		},
		showContacts:(all)=>{
			return $http({
				method:'GET',
				url:'/api/showcontact/',
				data:all

			})
			.then((resb)=> {
				return resb.data;
			});
		},
		removeAllContacts :(allcontacts)=>{
			return $http({
				method:'POST',
				url:'/api/removecontacts/',
				data:allcontacts

			})
			.then(function(resp){
				return resp.data;
			})
		},

		signin: (user)=> {
			return $http({
				method: 'POST',
				url: '/api/users/signin',
				data: user
			})
			.then((resp)=> {
				return resp.data;
			});
		},

		signup: (user)=> {
			return $http({
				method: 'POST',
				url: '/api/users/signup',
				data: user
			})
			.then((resp)=> {
				return resp.data.token;
			});
		},

		isAuth: ()=> {
			return !!$window.localStorage.getItem('Banafsajh');
		},

		signout: ()=> {
			$window.localStorage.removeItem('Banafsajh');
			$location.path('/signin');
		},
		addingClient : (client)=> {
			return $http({
				method: 'POST',
				url: '/api/client/',
				data: client
			})
			.then((resp)=> {
				return resp.data;
			});
		},
		showAllClients: ()=> {
			return $http({
				method: 'GET',
				url: '/api/clients/'
			})
			.then((resp)=> {
				return resp.data;
			});
		},
		showClientByCompanyName:(client)=>{
			return $http({
				method:'GET',
				url:'/api/oneclient/'+client.companyName,

			})
			.then((resp)=>{
				return resp.data
			});
		},
		removeClient:(client)=>{
			return $http({
				method:'POST',
				url:'/api/removeClient/'+client.companyName,
				data:client

			})
			.then((resp)=>{
				return resp.data
			});
		}
	}
});