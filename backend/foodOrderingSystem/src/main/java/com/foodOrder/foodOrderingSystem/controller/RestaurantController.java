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

import com.foodOrder.foodOrderingSystem.entity.Restaurant;
import com.foodOrder.foodOrderingSystem.service.RestaurantService;

@RestController
@RequestMapping("/restaurants")
@CrossOrigin(origins = "http://localhost:5173")
public class RestaurantController {
	
	 @Autowired
	    private RestaurantService restaurantService;

	    @PostMapping("/save")
	    public Restaurant saveRestaurant(@RequestBody Restaurant restaurant) {
	        return restaurantService.saveRestaurant(restaurant);
	    }

	    @GetMapping("/getall")
	    public List<Restaurant> getAllRestaurants() {
	        return restaurantService.getAllRestaurants();
	    }

	    @GetMapping("/{id}")
	    public Restaurant getRestaurantById(@PathVariable int id) {
	        return restaurantService.getRestaurantById(id);
	    }

	    @DeleteMapping("/delete/{id}")
	    public String deleteRestaurant(@PathVariable int id) {
	        restaurantService.deleteRestaurant(id);
	        return "Restaurant deleted successfully";
	    }

}
