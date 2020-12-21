const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.hashPassword = async (password) => {
  const hashResult = bcrypt.hashSync(password, 10)
  return hashResult
}

exports.verifyPassword = async (password, hashPassword) => {
  const verified = bcrypt.compareSync(password, hashPassword)
  return verified
}

exports.jwtSign = async (payload) => {
  const token = jwt.sign(payload, "this is a secret key", {
    expiresIn: "1h"
  });
  return token
}

exports.jwtVerify = async (token) => {
  const decodedData = jwt.verify(token, "this is a secret key")
  return decodedData
}
