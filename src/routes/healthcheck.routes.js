import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controller.js";

const router = Router({mergeParams:true});

router.route('/').get(healthcheck);

export default router