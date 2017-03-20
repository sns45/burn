"use strict";
(function () {
    angular.module("burnIt.login").controller("LoginCtrl", ["CommonSvc", "$location", "$http",LoginCtrl]);

    function LoginCtrl(CommonSvc, $location,$http) {
        var vm = this;
        vm.route = route;
        var userData;
        (function () {
            for (var x = 0; x < 2; x++) {
                if (CommonSvc.getUserData() == undefined) {
                    
                }
                else {
                  //  userData = CommonSvc.getUserData();
                    
                    /*$http.post('/api/user/register', userData).then(function (response) {
                                console.log(response.data);
                                 CommonSvc.setUserData(response.data);
                                $location.path('/profile');*/
                                //return response;    
                    //});
                }
            }
        })();
        vm.credentials = {
            email : "",
          password : ""
         };

        function route(param) {
            switch (param) {
            case 'SignIn':
                    console.log(vm.credentials);
                     if ((vm.credentials.password == undefined) || vm.credentials.email == undefined) {
                        $location.path('/login');
                       //  console.log(vm.credentials);
                         
                    
                   }else if (vm.credentials.password  || vm.credentials.email ){
                     $http.post('/api/user/login', vm.credentials).then(function (response) {
                                console.log(response.data);
                                 CommonSvc.setUserData(response.data);
                                $location.path('/profile'); 
                        
                         });
                     
                   }
                    break;    
              //  $location.path('/profile');
                //break;
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