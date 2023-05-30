import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function main() {
  try {
    await mongoose.connect(config.mongoURI as string)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

main()
app.listen(config.port, () => {
  console.log(`server is listening on port ${config.port}`)
})
