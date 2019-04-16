/**
 * 
 */
app.controller('JobCtrl',function($scope,JobService,$location){
	$scope.showJobDetails=false
	$scope.addJob=function(job){
		JobService.addJob(job).then(function(response){
			alert('Job details added successfully...')
			$scope.job={}
			$scope.error={}
		},function(response){
			$scope.error=response.data
			if($scope.error.errorCode==6)
				$location.path('/login')
		})
	}
	function getAllJobs(){
	JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	}
	$scope.setValue=function(jobId){
		if($scope.showJobDetails)
			$scope.showJobDetails=false
			else
				$scope.showJobDetails=true
		$scope.jobId=jobId;
	}

    $scope.deleteJob=function(id){
    	JobService.deleteJob(id).then(function(response){
    		getAllJobs()
    	},function(response){
    		$scope.error=response.data
    		if(response.status==401)
    			$location.path('/login')
    	})
    }	
	
    getAllJobs()
})

