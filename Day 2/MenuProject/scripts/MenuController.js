hrApp.controller('MenuController', ['$scope' , 'employeeActionList', function ($scope, employeeActionList) {
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    $scope.currentDate = new Date();
}]);