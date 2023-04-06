const home = require('../user-db.js')

exports.register = async (req, res, next) => {

  const { username, password, role } = req.body

  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" })
  }

  try {
    home.createUser(username, password, role)

    res.status(200).json({
        message: "User successfully created"
     })

  } catch (err) {
    res.status(401).json({
      message: "User not successful created",
      error: err.message
    })
  }
}

exports.login = async (req, res, next) => {
  const { username, password } = req.body

  // Check if username and password is provided.

  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    })
  }

  try {
    home.getUser(username, password)

    res.status(200).json({
        message: "User succesfully created"
    })
  }

  catch(err) {
    res.status(401).json({
      message: "User not succesfully created",
      error: err.message
    })
  }
}
