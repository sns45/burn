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
                /*function calculateCal (var day)
               console.log("*************"); */
                console.log(userData.deit[1]);
                
                vm.mondayCal = calculateCal (userData.deit[1].monday);
                vm.tuesadayCal = calculateCal (userData.deit[1].tuesday);
                vm.wednesdayCal = calculateCal (userData.deit[1].wednesday);
                vm.thursdayCal = calculateCal (userData.deit[1].thursday);
                vm.fridayCal = calculateCal (userData.deit[1].friday);
                vm.saturdayCal = calculateCal (userData.deit[1].saturday);
                vm.sundayCal = calculateCal (userData.deit[1].sunday);
            });
        })();

        function route(param) {
            switch (param) {
            case 'MBF':
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
        
        function calculateCal ( day){
            var totalCal;
             var breakfastCal = 0;
             var firstCal = 0;
             var lunchCal = 0;
             var secondCal = 0;
             var dinerCal = 0;
             
            for (var i= 0; i< day.breakfast.length; i++){
                breakfastCal = breakfastCal + day.breakfast[i].numberofCal;
            }
            for (var i= 0; i< day.first_snack.length; i++){
                firstCal = firstCal + day.first_snack[i].numberofCal;
            }
            for (var i= 0; i< day.lunch.length; i++){
                lunchCal = lunchCal + day.lunch[i].numberofCal;
            }
            for (var i= 0; i< day.second_snack.length; i++){
                secondCal = secondCal + day.second_snack[i].numberofCal;
            }
            for (var i= 0; i< day.diner.length; i++){
                dinerCal = dinerCal + day.diner[i].numberofCal;
            }
            
            totalCal = breakfastCal +  firstCal + lunchCal + secondCal + dinerCal;
            
            return totalCal;
        }

    }
})();