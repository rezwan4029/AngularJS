var myApp = angular.module("myModule", []);

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

controllers.customerController = function ($scope, customerService) {

    $scope.customers = customerService.getCustomers();
    $scope.rowLimit = 4;
    $scope.sortedColumn = "name";

    $scope.incrementLikes = function (customer) {
        customer.favourite.likes++;
    };

    $scope.incrementDislikes = function (customer) {
        customer.favourite.dislikes++;
    };

}


myApp.factory('customerService', function (Customer, Favourite) {
    return {
        getCustomers: function () {
            var customers = [
                new Customer("Rezwan", 1, "01917376161", "Mirpur",
                    new Date("February 25, 1992"), ["chicken", "beef"], new Favourite(0, 0)
                ),
                new Customer ("Mourin", 0, "01739158129", "Banasree",
                    new Date("November 14, 1992"), ["pasta", "vegetable", "chocolates"], new Favourite(0, 0)
                ),
                new Customer("Rafiqul Islam", 1, "01715056917", "Rupnagar",
                    new Date("January 20, 1954"), ["fish", "vegetable"], new Favourite(0, 0)
                ),
                new Customer("Rushmila", 0, "01727242089", "Australia",
                    new Date("January 14, 1984"), ["chicken", "vegetable"], new Favourite(0, 0)
                )
            ];
            return customers;
        }
    }
});

myApp.factory('Customer', function(){

    function Customer(name, gender, phone, address, birthday, foods, favourite){
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.foods = foods;
        this.favourite = favourite;
    }

    Customer.build = function(data){
        return new Customer(
            data.name,
            data.gender,
            data.phone,
            data.address,
            data.birthday,
            data.foods,
            data.favourite
        );
    };

    return Customer;
});

myApp.factory('Favourite', function(){

    function Favourite(likes, dislikes){
       this.likes = likes;
       this.dislikes = dislikes;
    }
    Favourite.build = function(data){
        return new Favourite(data.likes, data.dislikes);
    };
    return Favourite;
});

myApp.controller(controllers);