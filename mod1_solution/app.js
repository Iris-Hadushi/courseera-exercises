(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');

            // Remove empty strings from the array
            items = items.filter(function (item) {
                return item.trim() !== "";
            });

            if (items.length === 0) {
                $scope.message = "Please enter data first";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();