"use strict";
(function () {
    angular.module("burnIt.main").controller("MainCtrl", ["CommonSvc", "$location", "$http", MainCtrl]);

    function MainCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.genders = ["Male", "Female"];
        vm.person = {};
        var userData;
        (function () {
            $http.get('../../documents/objects/userObject.json').then(function (response) {
                userData = response.data;
            });
        })();

        function route(param) {
            switch (param) {
            case 'login':
                $location.path('/login');
                break;
            case 'register':
                $location.path('/register');
                break;
            case 'bmi':
                if (vm.person.age == undefined || vm.person.gender == undefined || vm.person.height == undefined || vm.person.weight == undefined || vm.person.zipcode == undefined) {
                    window.alert("You must enter your Zip Code, Age, Gender, Weight and Height to continue");
                    $location.path('/');
                }
                else {
                    if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                        window.alert("You must enter an age between 18 and 100");
                    }
                    else {
                        userData.userObject.profile.age = vm.person.age;
                        userData.userObject.profile.height = vm.person.height;
                        userData.userObject.profile.weight = vm.person.weight;
                        userData.userObject.profile.zipcode = vm.person.zipcode;
                        if (vm.person.gender == "Male") {
                            userData.userObject.profile.gender = "m";
                        }
                        else {
                            userData.userObject.profile.gender = "f";
                        }
                        console.log("*********************");
                        console.log(userData);
                        console.log("**********************");
                        CommonSvc.setUserData(userData);
                        $location.path("/planning");
                    }
                }
                break;
            }
        }
    }
})();