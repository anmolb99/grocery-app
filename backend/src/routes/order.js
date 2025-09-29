import {
  confirmOrder,
  createOrder,
  getOrderById,
  getOrders,
  updateOrderStatus,
} from "../controllers/orders/order.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const orderRoutes = async (fastify, options) => {
  fastify.addHook("preHandler", async (request, reply) => {
    const isAuthenticated = await verifyToken(request, reply);

    if (!isAuthenticated) {
      return reply.status(403).send({ message: "Unauthorized" });
    }
  });

  fastify.post("/order", createOrder);
  fastify.get("/order", getOrders);
  fastify.patch("/order/:orderId/status", updateOrderStatus);
  fastify.post("/order/:orderId/confirm", confirmOrder);
  fastify.get("/order/:orderId", getOrderById);
};
