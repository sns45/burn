"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileDietPlan", ["CommonSvc", "$location", "meanData","$uibModal", ProfileDietPlan]);

    function ProfileDietPlan(CommonSvc, $location, meanData, $uibModal) {
        var vm = this;
        vm.route = route;
        var userData;
        var meal = [];
        
        (function () {
            
            meanData.getProfile().then(function (data) {
                userData = data.data.userObject;
             //   console.log(data.data.userObject.deit[0].monday);
            });
        })();

        function route(param) {
            switch (param) {
            case 'MBF':
                    console.log(userData.deit[1]);
                 meal = userData.deit[1].monday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });    
                    
                break;
            case 'MFS':
                meal = userData.deit[1].monday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'ML':
                    meal = userData.deit[1].monday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'MSB':
                    meal = userData.deit[1].monday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'MD':
                    meal = userData.deit[1].monday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TBF':
                    meal = userData.deit[1].tuesday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TFS':
                    meal = userData.deit[1].tuesday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TL':
                       meal = userData.deit[1].tuesday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TSB':
                       meal = userData.deit[1].tuesday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TD':
                       meal = userData.deit[1].tuesday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WBF':
                       meal = userData.deit[1].wednesday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WFS':
                      meal = userData.deit[1].wednesday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WL':
                          meal = userData.deit[1].wednesday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WSB':
                          meal = userData.deit[1].wednesday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WD':
                          meal = userData.deit[1].wednesday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THBF':
                          meal = userData.deit[1].thursday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THFS':
                    meal = userData.deit[1].thursday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THL':
                    meal = userData.deit[1].thursday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THSB':
                    meal = userData.deit[1].thursday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THD':
                    meal = userData.deit[1].thursday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FBF':
                    meal = userData.deit[1].friday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FFS':
                    meal = userData.deit[1].friday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FL':
                    meal = userData.deit[1].friday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FSB':
                    meal = userData.deit[1].friday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FD':
                    meal = userData.deit[1].friday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SBF':
                    meal = userData.deit[1].saturday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SFS':
                    meal = userData.deit[1].saturday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SL':
                    meal = userData.deit[1].saturday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SSB':
                    meal = userData.deit[1].saturday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SD':
                    meal = userData.deit[1].saturday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUBF':
                    meal = userData.deit[1].sunday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUFS':
                    meal = userData.deit[1].sunday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUL':
                    meal = userData.deit[1].sunday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUSB':
                    meal = userData.deit[1].sunday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUD':
                    meal = userData.deit[1].sunday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'back':
                $location.path('/profile');
                break;
            }
        }

    }
})();