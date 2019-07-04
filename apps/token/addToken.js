const jwt = require("jsonwebtoken")
const secret = "token"

module.exports = userInfo => {
  const token = jwt.sign(
    {
      user: userInfo.user,
      id: userInfo.id
    },
    secret,
    { expiresIn: "1h" }
  )
  return token
}
