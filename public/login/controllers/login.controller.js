"use strict";

(function () {
    angular
        .module("burnIt.login")
        .controller("LoginCtrl", ["CommonSvc", "$location", "$http", LoginCtrl]);

    function LoginCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){
                case 'SignIn':
                    $http.post('/api/user/login', {email: vm.email, password: vm.password}).then(function (response) {
                            
                            $location.path('/profile');    
                            return response;
                        }, function (error, status){
                            window.alert("Log In attempt failed. Please try again.");
                            return error;
                            //$scope.data.error = { message: error, status: status};
                            //console.log($scope.data.error.status); 
                      });
                    //$location.path('/profile');
                    break;
                case 'Register':
                    
                    $location.path('/register');
                    break;
                 case 'Fpassword':
                    $location.path('/profile');
                    break;
                case 'back':
                    $location.path('/planning');
                    break;
            }
        }
    }
})();
