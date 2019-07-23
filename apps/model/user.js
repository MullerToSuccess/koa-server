const mongoose = require("../../db/db")
const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: String,
  name: String,
  password: String,
  email: String
})

const User = mongoose.model("user", userSchema)

module.exports = User // 返回model
