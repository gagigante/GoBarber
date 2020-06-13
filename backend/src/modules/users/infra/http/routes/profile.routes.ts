import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '../middlewares/ensureAutheticated';

import ProfileController from '../controllers/ProfileController';

const profileController = new ProfileController();

// http://localhost:3333/profile
const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
      // TODO: CONDITIONAL VALIDATION
    },
  }),
  profileController.update,
);

export default profileRouter;
