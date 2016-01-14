angular.module('Customer')
    .directive('customerTable', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'customer-table.html',
            //replace: true,
            //transclude: true,
            scope: {
                customer: null
            },
            link: function (scope, element, attrs) {
                scope.placeholder = attrs.placeholder || 'Search...';
            }
        };
    });
