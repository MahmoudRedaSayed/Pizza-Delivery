const admin = (req, res, next) => {
    if (req.user && req.user.Admin) {
      next()
    } else {
      console.log(req.user)
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }