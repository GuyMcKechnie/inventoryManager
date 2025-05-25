package com.booklidio.booklidio_spring_backend.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE,
        RequestMethod.OPTIONS }, allowedHeaders = "*", maxAge = 3600)
public class OrderController {
    private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(OrderController.class);
    @Autowired
    private OrderService orderService;

    @GetMapping("/getOrder/{orderUUID}")
    public ResponseEntity<Optional<Order>> getOrder(@PathVariable("orderUUID") String orderUUID) {
        try {
            return new ResponseEntity<>(orderService.getOrder(orderUUID), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting order with UUID: {}", orderUUID, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateOrderStatus/{orderUUID}")
    public ResponseEntity<HttpStatus> updateOrderStatus(@PathVariable("orderUUID") String orderUUID,
            @RequestBody int status) {
        try {
            orderService.updateOrderStatus(orderUUID, status);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error updating order: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
