const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Favorite = require('./Favorite')

const userSchema = new Schema(
  {
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    favorites: [{
      type: Schema.Types.String,
      ref: 'favorites'
    }]
  },
  { timestamps: false }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

module.exports = mongoose.model('users', userSchema)
