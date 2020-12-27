module.exports = (parent, args, { currentUser }) => {
  if(!currentUser){
    return new Error('Not authenticated as user.');
  }
}
