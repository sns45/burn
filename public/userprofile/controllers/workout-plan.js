"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileWorkouts", ["CommonSvc", "$location", "meanData", ProfileWorkouts]);

    function ProfileWorkouts(CommonSvc, $location, meanData) {
        var vm = this;
        vm.route = route;
        var userData;
        var userData;
        (function () {
            meanData.getProfile().then(function (data) {
                vm.nutritionists = data.data.userObject.work_out;
            });
        })();

        function route(param) {
            switch (param) {
            case 'profile':
                $location.path('/profile');
                break;
            }
        }
    }
})();