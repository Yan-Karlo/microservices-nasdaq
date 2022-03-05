
exports.findError = (errorLabel, errorMessage = '') => {
  errorsList = {
    accessDenied: {
      message: 'Access Denied.',
      errorMessage: 'The user not found or wrong password.',
      status: 401
    },
    errorNotFound: {
      message: 'Error Not Found',
      errorMessage: 'The informed error code is not valid.',
      status: 400
    },
    userRegistering: {
      message: 'Something went wrong when registering the user. Probably the email is already registered',
      errorMessage: errorMessage,
      status: 400
    },
    invalidUserData: {
      message: 'Invalid user data.',
      errorMessage: 'The email or role either are missing or mispelled',
      status: 400
    },
    userIsNotSuperUser: {
      message:'This user isnot a super-user.',
      errorMessage: 'This user does not have super-user role',
      status: 401,
    },
    emailDoesNotExist: {
      message:'The informed email does not exist.',
      errorMessage: 'The informed email was not found.',
      status: 400,
    },
    unexpectedError: {
      message:'An unexpected error happened.',
      errorMessage: errorMessage,
      status: 500,
    },
    callingStockService: {
      message:'Error when reaching the stock microservice.',
      errorMessage: errorMessage,
      status: 400,
    },
    savingNewHistory: {
      message:'Error when saving the user history for a stock code.',
      errorMessage: errorMessage,
      status: 500,
    },

  }

  return errorsList[errorLabel] ?? errorsList['errorNotFound']
}