const mongoose = require("../../db/db")
const Schema = mongoose.Schema

const ceshiSchema = new Schema({
  name: String,
  phone: String,
  sex: String
})

const User = mongoose.model("user", ceshiSchema)

module.exports = User // 返回model
