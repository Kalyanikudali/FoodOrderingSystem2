package com.foodOrder.foodOrderingSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodOrder.foodOrderingSystem.entity.Restaurant;

public interface RestaurentRepo extends JpaRepository<Restaurant, Integer>{

}
