'use strict';

/**
 * @ngdoc function
 * @name fundlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fundlistApp
 */
angular.module('fundlistApp')
    .controller('MainCtrl', function ($scope, FundsService) {
        FundsService.getFundsList().then(function (response) {
            if (response) {
                $scope.funds = response;
            }
        })

        $scope.filterShare = function (fund) {
            $scope.shares = fund.shareClasses;
            console.log('funds', fund);
        }

        $scope.showGraphs = function (share) {
            //            "ISIN Code", to and from
            console.log(share);

            $('#graph_container').highcharts({
                title: {
                    text: 'Monthly Average Dates from and to',
                    x: -20 //center
                },
                subtitle: {
                    text: share['ISIN Code'],
                    x: -20
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Timestamp'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
            }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'From Date',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                    name: 'To Date',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });


        }
    });