"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileCtrl", ["CommonSvc", "$location", "meanData","authentication",ProfileCtrl]);

    function ProfileCtrl(CommonSvc, $location, meanData,authentication) {
        var vm = this;
        vm.route = route;
        var userData;
        (function () {           
                        
                        meanData.getProfile().then(function (data) {
                        console.log(data);
                        if (data.data == null) {
                           }else{
                               vm.first_name = data.data.userObject.profile.first_name;
                        vm.last_name = data.data.userObject.profile.last_name;
                        vm.phone_number = data.data.userObject.profile.phone_number;
                        vm.address = data.data.userObject.profile.address;
                        vm.age = data.data.userObject.profile.age;
                        vm.height = data.data.userObject.profile.height + " cm";
                        vm.weight = data.data.userObject.profile.weight + " kg";
                        //console.log(data.data.userObject.deit[0].monday); 
                           }   
                     });
                    
            
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
                authentication.logout;
                $location.path('/login');
                break;
             case 'trackfoods':
                    $location.path('/trackfoods');
                    break;
            case 'workout':
                    $location.path('/profile/workout-plan');
                    break;
            }
        }
    }
})();