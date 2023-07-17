import { Profile } from "../models/profile.js"
import { Beer } from "../models/beer.js"

async function create(req, res) {
  try {
    req.body.author = req.user.profile
    const beer = await Beer.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { beers: beer} },
      { new: true }
    )
    beer.author = profile
    res.status(201).json(beer)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const beers = await Beer.find({})
    .populate('author')
    .sort({createdAt: 'desc' })
    res.status(200).json(beers)
  } catch (error) {
    res.status(500).json(error)
  }
}


export { 
  create,
  index,
}