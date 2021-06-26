const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteSchema = new Schema(
  {
    imdbID: String,
    Title: String,
    Poster: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  },
  { timestamps: false }
);

favoriteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('favorites', favoriteSchema)
