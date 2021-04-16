import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
})

export default model('actProductModel', schema)
