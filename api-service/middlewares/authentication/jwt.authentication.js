const jwt = require('jsonwebtoken');
const config = require('../../config/config')[process.env.NODE_ENV];

exports.checkAuthentication = (req, res, next) => {
  if (config.loginRequired) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      return res.status(401).json({
        code: '401',
        message: 'Authentication failure : No Authentication Header.',
        description: 'The authentication header is either incomplete, missing or wrong.',
      });
    }

    const token = authHeader.split(' ')[1];
    if (!token || token === '') {
      return res.status(401).json({
        statusCode: '401',
        message: 'Authentication failure : No Token.',
        description: 'The header doesnt have a token.',
      });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ message: err && err.message });
    }

    if (!decodedToken) {
      return res.status(401).json({
        statusCode: '401',
        message:
          'Token authentication failure : No Token decodification.',
      });
    }

    req.userId = decodedToken.id;
    req.userRole = decodedToken.role;
  }

  next();
};
