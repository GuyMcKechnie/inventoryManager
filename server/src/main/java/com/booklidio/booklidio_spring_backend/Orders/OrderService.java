package com.booklidio.booklidio_spring_backend.Orders;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    @Autowired
    private OrderRepository orderRepository;

    public Optional<Order> getOrder(String orderUUID) throws Exception {
        try {
            return orderRepository.findByOrderUUID(orderUUID);
        } catch (Exception e) {
            logger.error("Error fetching order with UUID: " + orderUUID, e);
            throw new RuntimeException("Error fetching order with UUID: " + orderUUID, e);
        }
    }

    public void updateOrderStatus(String orderUUID, int orderStatus) throws Exception {
        try {
            Optional<Order> existingOrder = orderRepository.findByOrderUUID(orderUUID);
            if (existingOrder.isPresent()) {
                existingOrder.get().setStatus(orderStatus);
                orderRepository.save(existingOrder.get());
            } else {
                logger.error("Error editing order with ID: {} - Order not found", orderUUID);
                throw new Exception("Edit: Order not found");
            }
        } catch (Exception e) {
            logger.error("Error editing order with ID: {}", orderUUID, e);
            throw new RuntimeException("Error editing order with ID: " + orderUUID, e);
        }
    }
}
