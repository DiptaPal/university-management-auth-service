import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

// router.use('/users/', UserRoutes.router);
// router.use('/academic-semesters/', AcademicSemesterRoutes);

export default router;
