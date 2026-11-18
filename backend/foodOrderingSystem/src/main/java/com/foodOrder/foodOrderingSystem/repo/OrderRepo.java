package com.foodOrder.foodOrderingSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodOrder.foodOrderingSystem.entity.Orders;

public interface OrderRepo extends JpaRepository<Orders, Integer>{

}
