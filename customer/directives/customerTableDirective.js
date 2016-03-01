angular.module('customer.directives')
    .directive('customerTable', function () {
        'use strict';
        console.log('ads');
        return {
            restrict: 'E',
            templateUrl: 'directives/customer-table.html',
            replace: true,
            transclude: true,
            scope: {
                customer: '='
            },
            link: function (scope, element, attrs) {
                console.log('a: ' + scope);
                console.log('b : '+ $scope);
                scope.placeholder = attrs.placeholder || 'Search...';
            }
        };
    });
