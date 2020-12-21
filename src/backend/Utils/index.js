const bcrypt = require("bcrypt")

exports.hashPassword = async (password) => {
  const hashResult = bcrypt.hashSync(password, 10)
  return hashResult
}

exports.verifyPassword = async (password, hashPassword) => {
  const verified = bcrypt.compareSync(password, hashPassword)
  return verified
}
