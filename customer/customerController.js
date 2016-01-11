var myApp = angular.module("Customer");

var controllers = {};

myApp.filter("gender", function () {
    'use strict';
    return function (gender) {
        switch (gender) {
            case 0:
                return "Female";
            case 1:
                return "Male";
            default :
                return "Not Disclosed"
        }
    }
});

/*
* here `customerController` is the name of the Controller
*/
controllers.customerController = function ($scope, CustomerService) {
    'use strict';
    $scope.customers = CustomerService.getCustomers();
    $scope.rowLimit = 5;
    $scope.sortedColumn = "name";
    console.log($scope.customers);
    $scope.incrementLikes = function (customer) {
        customer.favourite.likes++;
    };

    $scope.incrementDislikes = function (customer) {
        customer.favourite.dislikes++;
    };

};

myApp.controller(controllers);
