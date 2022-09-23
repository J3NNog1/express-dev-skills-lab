import mongoose from 'mongoose'

const Schema = mongoose.Schema

//MAKE SURE EVERY VALUE IS CAPITALIZED
const skillSchema = new Schema ({
  text: String,
  done: Boolean,
})


// Compile the schema into a model and export it
const Skill = mongoose.model('skill', skillSchema)

export {
  Skill
}