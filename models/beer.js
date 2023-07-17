import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5]
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

const beerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
    author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  },
  { timestamps: true }
)

const Beer = mongoose.model('Blog', blogSchema)

export { Beer }