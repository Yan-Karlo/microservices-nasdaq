
exports.findError = (errorLabel, errorMessage = '') => {
  errorsList = {
    errorNotFound: {
      message: 'Error Not Found',
      errorMessage: 'The informed error code is not valid.',
      status: 404
    },
    userIdMissing: {
      message:'The is user id was not informed.',
      errorMessage: 'The user id is necessary to the process',
      status: 500,
    },
    unexpectedError: {
      message:'An unexpected error happened.',
      errorMessage: errorMessage,
      status: 500,
    },
    stockCodeMissing : {
      message:'Stock code parameter is missing.',
      errorMessage: 'The stock code was not informed',
      status: 404,
    },
    stockQuotesRequest: {
      message:'Error returned by 3rd party Stock API.',
      errorMessage: errorMessage,
      status: 500,
    },
  }

  return errorsList[errorLabel] ?? errorsList['errorNotFound']
}