import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.mongoURI as string)
    logger.info('Connected to MongoDB')
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }
}

main()
app.listen(config.port, () => {
  logger.info(`server is listening on port ${config.port}`)
})
