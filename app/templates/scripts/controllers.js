define([
    'angular',
    'jquery'
], function(angular, $) {
    'use strict';

    /* Controllers */

    angular.module('webControllers', [
        'webServices'
    ]).controller('Home', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
        }
    ]);
});
