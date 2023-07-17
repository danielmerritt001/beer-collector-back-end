import mongoose, { SchemaType } from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  beers: [{ type: Schema.Types.ObjectId, ref: 'Beer'}]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
