package com.foodOrder.foodOrderingSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodOrder.foodOrderingSystem.entity.Food;
import com.foodOrder.foodOrderingSystem.service.FoodService;

@RestController
@RequestMapping("/foods")
@CrossOrigin(origins = "http://localhost:5173")

public class FoodController {
	 @Autowired
	    private FoodService foodService;

	    @PostMapping("/save")
	    public Food saveFood(@RequestBody Food food) {
	        return foodService.saveFood(food);
	    }

	    @GetMapping("/getall")
	    public List<Food> getAllFoods() {
	        return foodService.getAllFoods();
	    }

	    @GetMapping("/{id}")
	    public Food getFoodById(@PathVariable int id) {
	        return foodService.getFoodById(id);
	    }

	    @DeleteMapping("/delete/{id}")
	    public String deleteFood(@PathVariable int id) {
	        foodService.deleteFood(id);
	        return "Food deleted successfully";
	    }

}
