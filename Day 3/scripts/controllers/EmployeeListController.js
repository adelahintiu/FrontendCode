hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory


        $scope.employees = commonResourcesFactory.findAllEmployeesUrl;
        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);


        };


    }]);