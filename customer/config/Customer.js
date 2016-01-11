angular.module("Customer").factory('Customer', function () {

    'use strict';

    function Customer(name, gender, phone, address, birthday, foods, favourite) {
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.foods = foods;
        this.favourite = favourite;
    }

    Customer.build = function (data) {
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
