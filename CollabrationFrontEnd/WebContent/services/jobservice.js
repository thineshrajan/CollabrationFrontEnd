/**
 * JobService
 */
app.factory('JobService',function($http){
	var jobService={}
	var BASE_URL="http://localhost:9040/MiddleWare/"
	
	jobService.addJob=function(job){
	 return	$http.post(BASE_URL+ "/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get(BASE_URL + "/alljobs")
	}
	
	jobService.deleteJob=function(id){
	 return $http['delete'](BASE_URL + "/deletejob/"+id)
	}
	return jobService;
})

/*app.factory('JobService',function($http){
var jobService={}
	
jobService.addJob=function(job){
	return $http.post("http://localhost:9040/MiddleWare/addjob",job)
}

jobService.getAllJobs=function(){
	return $http.get("http://localhost:9040/MiddleWare/getalljobs")
}
jobService.deleteJob=function(id){
	 return $http.put("http://localhost:9040/MiddleWare/deletejob/"+id)
	}
return jobService;
})
*/