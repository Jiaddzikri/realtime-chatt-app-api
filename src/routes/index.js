import Router from 'express';
import userRouter from './users/users.js';

const router = Router();

router.use('/v1/user', userRouter)

export default router;