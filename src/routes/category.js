import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';

const router = Router();



router.post('/products', checkAuth, create);

export default router;