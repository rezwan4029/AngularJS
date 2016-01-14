angular.module("Customer").service('CustomerService', function (Customer, Favourite) {
    'use strict';
    return {
        getCustomers: function () {
            var customers = [
                new Customer("Superman", 1, "01917376161", "Mirpur",
                    new Date("February 25, 1992"), ["chicken", "beef"], new Favourite(0, 0)
                ),
                new Customer ("Batman", 0, "01739158129", "Banasree",
                    new Date("November 14, 1992"), ["pasta", "vegetable", "chocolates"], new Favourite(0, 0)
                ),
                new Customer("Spiderman", 1, "01715056917", "Rupnagar",
                    new Date("January 20, 1954"), ["fish", "vegetable"], new Favourite(0, 0)
                ),
                new Customer("Avenger", 0, "01727242089", "Australia",
                    new Date("January 14, 1984"), ["chicken", "vegetable"], new Favourite(0, 0)
                )
            ];
            return customers;
        },
        getDetails: function (customer) {
            return customer.name + " [ "  + customer.phone + " ] " + "{ " + customer.address + " }";
        }
    }
});
