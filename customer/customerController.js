
var myApp = angular
    .module("myModule", [])
    .filter("gender", function(){
        return function(gender){
            switch (gender) {
                case 0:
                    return "Female";
                case 1:
                    return "Male";
                default :
                    return "Not Disclosed"
            }
        }
    })
    .controller("myController", function($scope){
        var customers = [
            {
                name : "Rezwan",
                "gender": 1,
                phone: "01917376161",
                address : "Mirpur",
                "birthday": new Date("February 25, 1992"),
                "foods": ["chicken", "beef"],
                "likes": 0,
                "dislikes": 0

            },
            {
                name : "Mourin",
                "gender": 0,
                phone: "01739158129",
                address : "Banasree",
                "birthday": new Date("November 14, 1992"),
                "foods": ["pasta", "vegetable", "chocolates"],
                "likes": 0,
                "dislikes": 0
            },
            {
                name : "Rafiqul Islam",
                "gender": 1,
                phone: "01715056917",
                address : "Rupnagar",
                "birthday": new Date("January 20, 1954"),
                "foods": ["fish", "vegetable"],
                "likes": 0,
                "dislikes": 0
            },
            {
                name : "Rushmila",
                "gender": 0,
                phone: "01727242089",
                address : "Australia",
                "birthday": new Date("January 14, 1984"),
                "foods": ["chicken", "vegetable"],
                "likes": 0,
                "dislikes": 0
            }
        ];

        $scope.customers = customers;

        $scope.rowLimit = 4;
        $scope.sortedColumn = "name";

        $scope.incrementLikes = function(customer){
            customer.likes++;
        };

        $scope.incrementDislikes = function(customer){
            customer.dislikes++;
        };

});