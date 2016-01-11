angular.module('MarketingPlatformApp.directives')
    .directive('ncAssetsSearch', function () {
        'use strict';
        return {
            restrict : 'E',
            templateUrl : 'assets/directives/asset_search/asset-search.html',
            replace: true,
            transclude: true,
            scope : {
                search : '&',
                items : '=',
                init: '&',
                clearsearch: '&',
                searchOptions: '=',
            },
            link: function (scope, element, attrs) {
                scope.placeholder = attrs.placeholder || 'Search...';
            }
        };
    });