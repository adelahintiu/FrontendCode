hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){

    $scope.jobList = [];
    $http.get("http://hrapp-zth.rhcloud.com/hrapp/jobs")
        .success(function(data, status, headers, config){
            $scope.jobList = data;
    })
    .error(function(data, status, headers, config){
        alert("Error" + status);
    })

//    TODO #10 - make AJAX call


}]);
