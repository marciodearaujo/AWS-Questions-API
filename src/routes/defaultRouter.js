import express from 'express';
import defaultRouterController from '../controller/defaultRouterController.js';
const router=express.Router()

router
.route("*")
.get(defaultRouterController.routerNotFound)
.patch(defaultRouterController.routerNotFound)
.put(defaultRouterController.routerNotFound)
.delete(defaultRouterController.routerNotFound)
.options(defaultRouterController.routerNotFound)
.head(defaultRouterController.routerNotFound)
.post(defaultRouterController.routerNotFound)

export default router