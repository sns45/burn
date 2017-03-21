"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileNutritionists", ["CommonSvc", "$location", "meanData", ProfileNutritionists]);

    function ProfileNutritionists(CommonSvc, $location, meanData) {
        var vm = this;
        vm.route = route;
        var userData;
        (function () {
            meanData.getProfile().then(function (data) {
                userData = data.data.userObject;
                vm.dailyMeal = data.data.userObject.deit.monday.breakfast;
            });
        })();

        function route(param) {
            switch (param) {
            case 'NutritionistsSave':
                $location.path('/profile');
                break;
            case 'NutritionistsEdit':
                $location.path('/');
                break;
            }
        }
    }
})();