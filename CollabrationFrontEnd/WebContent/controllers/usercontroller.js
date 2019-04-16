/**
 * UserCtrl
 */
app.controller('UserCtrl',function($scope,UserService,$location,$rootScope,$cookieStore){
	
	$scope.registration=function(user){//user object from view 
		UserService.registration(user)//to service
		.then(function(response){
			$location.path('/login')
		},function(response){
			$scope.error=response.data
		})
	}
	
	$scope.login=function(user){
		UserService.login(user).then(
				function(response){
					//response.data is user object
					$rootScope.user=response.data
					$cookieStore.put('loggedInUser',response.data)
					$location.path('/home')
				},
				function(response){
					$scope.error=response.data
				})
	}
	
	$scope.update=function(user){
		UserService.update(user).then(function(response){
			alert("user details updated successfully..")
			$location.path('/home')
		},function(response){
				$scope.error=response.data
		})
	}	
 
if($rootScope.user!=undefined){
	UserService.getUser().then(function(response){
		$scope.user=response.data
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
}

   

	
})
