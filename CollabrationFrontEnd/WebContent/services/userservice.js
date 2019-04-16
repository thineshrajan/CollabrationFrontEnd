/**
	 * UserService
	 */
	app.factory('UserService',function($http){
		var userService={}
		
		userService.registration=function(user){// user from controller
			return $http.post("http://localhost:9040/MiddleWare/register",user)
		}
		
		userService.login=function(user){
			return $http.put("http://localhost:9040/MiddleWare/login",user)
		}
		
		
		userService.logout=function(){
			return $http.put("http://localhost:9040/MiddleWare/logout")
		}
		userService.getUser=function(){
			return $http.get("http://localhost:9040/MiddleWare/getuser")
		}
		userService.update=function(user){
			return $http.put("http://localhost:9040/MiddleWare/updateprofile",user)
		}
		
		return userService;
	})
