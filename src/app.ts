import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';
// import { UserRoutes } from './app/modules/user/user.route';
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
// import { logger } from './shared/logger'

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logger.info(app.get('env'))

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

//application route
// app.use('/api/v1/users', UserRoutes.router);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', routers);

//global error handler
app.use(globalErrorHandler);

export default app;
