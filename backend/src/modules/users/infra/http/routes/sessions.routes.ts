import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsController = new SessionsController();

// http://localhost:3333/users
const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
