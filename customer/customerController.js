var myApp = angular.module("customer");

var controllers = {};

myApp.filter("gender", function () {
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

    $scope.customers = CustomerService.getCustomers();
    $scope.rowLimit = 4;
    $scope.sortedColumn = "name";

    $scope.incrementLikes = function (customer) {
        customer.favourite.likes++;
    };

    $scope.incrementDislikes = function (customer) {
        customer.favourite.dislikes++;
    };

};

myApp.controller(controllers);