"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileCtrl", ["CommonSvc", "$location", "meanData",ProfileCtrl]);

    function ProfileCtrl(CommonSvc, $location, meanData) {
        var vm = this;
        vm.route = route;
        var userData;
        (function () {
            for (var x = 0; x < 2; x++) {
                if (CommonSvc.getUserData() == undefined) {
                    
                    
                    meanData.getProfile()
                            .then(function (data) {
                        userData = data.data.userObject;
                        vm.first_name = data.data.userObject.profile.first_name;
                        vm.last_name = data.data.userObject.profile.last_name;
                        vm.phone_number = data.data.userObject.profile.phone_number;
                        vm.address = data.data.userObject.profile.address;
                        vm.age = data.data.userObject.profile.age;
                        vm.height = data.data.userObject.profile.height + " cm";
                        vm.weight = data.data.userObject.profile.weight + " kg";
                        
                            })
                            /*.error(function (e) {
                            console.log(e);
                        })*/;
                    
                 //   vm.first_name = data.data.userObject.profile.first_name;
                    
                }
                else {
                    userData = CommonSvc.getUserData();
                    vm.first_name = userData./*user.userObject.*/profile.first_name;
                    vm.last_name = userData.user.userObject.profile.last_name;
                    vm.phone_number = userData.user.userObject.profile.phone_number;
                    vm.address = userData.user.userObject.profile.address;
                    vm.age = userData.user.userObject.profile.age;
                    vm.height = userData.user.userObject.profile.height + " cm";
                    vm.weight = userData.user.userObject.profile.weight + " kg";
                }
            }
        })();

        function route(param) {
            switch (param) {
            case 'ProfileNutritionists':
                $location.path('/profile/nutritionist-lists');
                break;
            case 'ProfileDietPlan':
                $location.path('/profile/week-diet-plan');
                break;
            case 'SignOut':
                $location.path('/login');
                break;
            }
        }
    }
})();