package com.booklidio.booklidio_spring_backend.Orders;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByOrderUUID(String orderUUID);

    List<Order> findByStatusBetween(int lowerStatus, int higherStatus);
}