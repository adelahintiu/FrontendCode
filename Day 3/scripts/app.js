var hrApp = angular.module('hrApp', ['ngRoute']);
hrApp .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        }).
        when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        }).
        when('/employeelist', {
            templateUrl: 'views/employeeList.html',
            controller: 'EmployeeListController'
        }).
        when('/employeeview/:employeeid', {
            templateUrl: 'views/employeeview.html',
            controller: 'EmployeeViewController'
        }).
        when('/numbers', {
            templateUrl: 'views/demo/math.html',
            controller: 'MathController'
        }).
        when('/demoRequest', {
            templateUrl: 'views/demo/request.html',
            controller: 'RequestController'
        }).
           

        otherwise({
            redirectTo: '/main'
        });
}]);

// TODO #4 add #/numbers route and use redirectTo
// TODO #6 add route for mathematical operations
// TODO #9 add route for http request demo page

// TODO #HR1 add routes for Employees List page and Employee View page

