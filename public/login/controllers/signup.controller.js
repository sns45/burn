(function () {
    "use strict";
    angular.module("burnIt.login").controller("SignupCtrl", ["CommonSvc", "$location", "$http", "NutritionistsSvc","authentication", SignupCtrl]);

    function SignupCtrl(CommonSvc, $location, $http ,NutritionistsSvc,authentication ) {
            var vm = this;
            vm.route = route;
            var userData;
            var weekData;
            var testData;
            (function () {
                for (var x = 0; x < 2; x++) {
                    if (CommonSvc.getUserData() == undefined) {
                        if (x < 1) {
                            $http.get('../../documents/objects/userObject.json').then(function (response) {
                                userData = response.data;
                            });
                            $http.get('../../documents/objects/weekObject.json').then(function (response) {
                                weekData = response.data;
                            });
                            $http.get('../../documents/objects/testObject.json').then(function (response) {
                                testData = response.data;
                            });
                        }
                        else if (x > 1) {
                               userData.userObject.deit.push(weekData); 
                        }
                    }
                    else {
                        userData = CommonSvc.getUserData();
                        console.log(userData);
                    }
                }
            })();

            function route(param) {
                switch (param) {
                case 'signup':
                    if ((vm.password === vm.re_password) || !vm.email == undefined) {
                        for (var i = 0; i < 3; i++) {
                            if (i < 2) {
                                userData.userObject.profile.first_name = vm.first_name;
                                userData.userObject.profile.last_name = vm.last_name;
                                userData.userObject.profile.address = vm.address;
                                userData.userObject.profile.phone_number = vm.phone_number;
                                userData.userObject.email = vm.email;
                                userData.email = vm.email;
                                userData.password = vm.password;
                                userData.userObject.profile.user_name = vm.user_name;
                                //userData.userObject.password = vm.password;
                                userData.userObject.name = vm.first_name + vm.last_name;
                                console.log(userData);  
                            }
                            else {
                               
                                authentication
                                  .register(userData)
                                    .then(function(){
                                    $location.path('profile');
                                    });
                                
                            }
                        }
                    }
                    else {
                        window.alert("The password must match");
                    }
                    break;
                case 'back':
                    $location.path('/login');
                    break;
                }
            }
    }
  //]);
})();