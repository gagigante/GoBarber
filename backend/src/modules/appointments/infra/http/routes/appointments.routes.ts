import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticated';

import AppointmentsController from '../controllers/AppointmentsController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

// http://localhost:3333/appointments
const appointmentsRouter = Router();

const appointmentsController = new AppointmentsController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

appointmentsRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
appointmentsRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default appointmentsRouter;
