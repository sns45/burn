var passport = require('passport');
var UserModel = require('../models/users').UserModel;


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.createUser = function (req, cb){
   // console.log(req.body.password);
    var user =  req.body;
  //  user.setPassword(req.body.password);
    
    UserModel.create(user, cb);
    
}


/*module.exports.createUser = function (req, cb){
    
    UserModel.setPassword(req.body.password);
    
    UserModel.create(req.body, cb);
    
    
    
}*/

/*module.exports.retrieveUser = functon() {
    
    UserModel.find({
        
    }, function (err, data){
        if(err){
            console.error(err);
        }else {
            console.log(data)
        }
    })
}*/