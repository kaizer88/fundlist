'use strict';

/**
 * @ngdoc service
 * @name fundlistApp.app.services
 * @description
 * # app.services
 * Service in the fundlistApp.
 */
angular.module('fundlistApp')
    .service('FundsService', function ($http, $q) {
        var service = {};

        service.getFundsList = getFundsList;


        return service;

        function getFundsList() {
            //the dfd is a queue to simulate ensure that the app doesnt hang while retriving the list of funds, and also ensure a response
            var dfd = $q.defer();
            //this is a http method to retrieve then entire funds document
            $http.get("../../data/funds.json").then(function (response) {
                if (response) {
                    dfd.resolve(response.data.funds);
                }
            }, function (err) {
                dfd.error(err);
                console.log(err);
                alert('funds file not found, please make sure the Json file is in the right directory');
            });

            return dfd.promise;
        }
    });