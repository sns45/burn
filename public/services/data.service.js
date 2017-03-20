(function() {

  angular
    .module('burnIt')
    .service('meanData', meanData);

  meanData.$inject = ['$http', 'authentication'];
  function meanData ($http, authentication) {
     console.log(authentication.getToken());
    var getProfile = function () {
      return $http.get('/api/user/profile', {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    return {
      getProfile : getProfile
    };
  }

})();