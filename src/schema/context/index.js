const Utils = require("../../backend/Utils")

const UserDataLoader = require("../../backend/User/dataloader")
const PostDataLoader = require("../../backend/Post/dataloader")

module.exports = async ({ req }) => {
  const requestToken = req.headers.authorization || '';
  const token = requestToken.replace("Bearer ", "")
  let currentUser = undefined
  try {
    currentUser = await Utils.jwtVerify(token)
  } catch (e) {

  }
  return {
    currentUser,
    loaders: {
      ...UserDataLoader,
      ...PostDataLoader
    }
  }
}
