import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAutheticated';

import ProfileController from '../controllers/ProfileController';

const profileController = new ProfileController();

// http://localhost:3333/profile
const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
