import { Router, RequestHandler } from "express";
import { orderController } from "../controllers/order.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";
const router = Router();

// Create order
// router.post("/orders/:userId", isUserAuthorized, ((req, res, next) => {
//   orderController.createOrder(req, res).catch(next);
// }) as RequestHandler);

// Get all orders for a user
router.get(
  "/orders/:userId",
  isUserAuthorized,
  redisCacheMiddleware.getCache,
  ((req, res, next) => {
    orderController.getUserOrders(req, res).catch(next);
  }) as RequestHandler
);

// Get a single order by id
router.get("/orders/order/:orderId", isUserAuthorized, ((req, res, next) => {
  orderController.getOrderById(req, res).catch(next);
}) as RequestHandler);

router.put("/orders/status/:orderId", isUserAuthorized, ((req, res, next) => {
  orderController.updateOrderStatus(req, res).catch(next);
}) as RequestHandler);
export { router };
