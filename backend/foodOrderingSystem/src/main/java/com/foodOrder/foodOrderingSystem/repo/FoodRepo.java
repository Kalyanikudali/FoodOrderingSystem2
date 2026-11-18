package com.foodOrder.foodOrderingSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodOrder.foodOrderingSystem.entity.Food;

public interface FoodRepo extends JpaRepository<Food, Integer>{

}
