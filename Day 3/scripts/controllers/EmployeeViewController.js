hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location,commonResourcesFactoryBackup) {

        $scope.employee = {};
        var id= $routeParams.employeeid;
        console.log(id);

        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl+id)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                console.log("Error: " + status);
            });
        // TODO #HR6 get employee by id



        $scope.back = function() {
            // TODO back to Employee List page

}}]);