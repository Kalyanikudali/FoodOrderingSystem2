package com.foodOrder.foodOrderingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodOrder.foodOrderingSystem.entity.Food;
import com.foodOrder.foodOrderingSystem.repo.FoodRepo;

@Service

public class FoodService {
	@Autowired
    private FoodRepo foodRepository;

    public Food saveFood(Food food) {
        return foodRepository.save(food);
    }

    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    public Food getFoodById(int id) {
        return foodRepository.findById(id).orElse(null);
    }

    public void deleteFood(int id) {
        foodRepository.deleteById(id);
    }

}
