var mongoose = require('mongoose');
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema({
    email: {
        type: String
        , unique: true
        , required: true
    }
    , name: {
        type: String
        , required: true
    }
    , hash: String
    , salt: String
    , userObject: {
        profile: {
            first_name: String
            , last_name: String
                // , user_name: String
                
            , age: String
            , height: String
            , weight: String
            , gender: String
            , address: String
            , phone_number: String
            , zipcode: String
            , photo: {
                data: Buffer
                , contentType: String
            }
        }
        , planning: {
            status: String
            , risk: String
            , current_weigth: String
            , ideal_weight: String
        }
        , nutritionists: [
            {
                name: String
                , address: String
                , phone_number: String
		 }
	 ]
        , work_out: [
            {
                name: String
                , address: String
                , phone_number: String
		 }
    ]
        , deit: [
            {
                monday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , tuesday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , wednesday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , thursday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , friday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , saturday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
                , sunday: {
                    breakfast: [{
                            food_name: String
                            , numberofCal: Number
                            , thumb: {
                                data: Buffer
                                , contentType: String
                            }
                }
                ]
                    , first_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , lunch: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , second_snack: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                    , diner: [{
                        food_name: String
                        , numberofCal: Number
                        , thumb: {
                            data: Buffer
                            , contentType: String
                        }
                }]
                }
         }
	  ]
    }
});
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};
userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};
userSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id
        , email: this.email
        , name: this.name
        , exp: parseInt(expiry.getTime() / 1000)
    , }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
mongoose.model('User', userSchema);