package com.foodOrder.foodOrderingSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodOrder.foodOrderingSystem.entity.OrderItems;

public interface OrderItemsRepo extends JpaRepository<OrderItems, Integer>{

}
