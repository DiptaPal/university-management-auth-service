import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
// import { logger } from './shared/logger'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// logger.info(app.get('env'))

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

//application route
app.use('/api/v1/users', UserRoutes.router)

//global error handler
app.use(globalErrorHandler)

export default app
