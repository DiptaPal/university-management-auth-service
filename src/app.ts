import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
// import { logger } from './shared/logger'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// logger.info(app.get('env'))

//application route
app.use('/api/v1/users', router)

// //Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello World!')
//   throw new ApiError(400, 'Error khaisi re vai')
//   next('Error khaisi re vai') //error
// })

//global error handler
app.use(globalErrorHandler)

export default app
