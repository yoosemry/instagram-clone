import bcrypt from "bcrypt";
import mongoose from "mongoose";

import validator from "validator";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      validate: [validator.isEmail, "please enter a valid email"],
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      validate: [
        {
          validator: function (value) {
            return /^[A-z][A-Za-z0-9-_]{3,23}$/.test(value);
          },
          message: "username does not have to special characters",
        },
      ],
    },
    password: {
      type: String,
      lowercase: true,
      required: true,
      validate: [ validator.isStrongPassword, "Password must contain one or more alphanumeric characters and symbols",
        
      ],
    },
    isEmailConfirmed : {
        type  : Boolean,
        default : false,
        required : true
    },
    token : {
        type : String,

    },

    expireDate : {
        type : Date
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save' , async function(next){

    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    
    this.password = await bcrypt.hash(this.password, salt);

    return next();
});

userSchema.methods.comparePassword = async function(value){
   return await  bcrypt.compare(value, this.password)
}

const User = model('User', userSchema);

export default User;
