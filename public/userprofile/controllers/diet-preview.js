"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("PreviewCtrl", ["CommonSvc", "$location", "$http", "callerData", "$uibModal", "$uibModalInstance", PreviewCtrl]);

    function PreviewCtrl(CommonSvc, $location, $http, callerData, $uibModal, $uibModalInstance) {
        var vm = this;
        vm.close = close;
        (function () {
      
            console.log(callerData.mealArray);
           vm.dailyMeal = callerData.mealArray;
        })();


        function close() {

            //$uibModalInstance.close(vm.foodArray);
             $uibModalInstance.close();           


        }
    }
})();