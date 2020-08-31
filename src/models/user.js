const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema( {
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    const user = this;
    console.log('hashing')
    if (user.isModified('password')) {
        console.log('modified');
        try {
            user.password = await bcrypt.hash(user.password, 10);
        }catch(error){
            console.log(error);
            throw new Error(error);
        }

   }
    next();
});

userSchema.methods.toJSON = function(){
    const user = this;
    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
    
}

const user = mongoose.model('User', userSchema);
module.exports = user;