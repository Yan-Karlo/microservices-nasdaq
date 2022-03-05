const errorList = require('../../utils/errorList');

exports.isSuperUser = (req, res, next) => {
  console.log(req.userId, req.userRole)
  if (req.userRole.toLowerCase().trim() !== 'superuser') {
    return res.status(401).json(errorList.findError('userIsNotSuperUser'))
  }

  return next();
}