import { Error } from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericResponse } from '../interfaces/common'

const handleValidationError = (
  err: Error.ValidationError
): IGenericResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handleValidationError
