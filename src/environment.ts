
require('dotenv').config({path: '../secret.env'})

/** * @internal */
export const IS_DEV = () => {
  return process.env.NODE_ENV === 'development'
}

/** * @internal */
export const IS_PROD = () => {
  return process.env.NODE_ENV === 'production'
}
