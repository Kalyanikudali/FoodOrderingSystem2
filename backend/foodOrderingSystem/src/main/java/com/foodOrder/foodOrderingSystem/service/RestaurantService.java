package com.foodOrder.foodOrderingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodOrder.foodOrderingSystem.entity.Restaurant;
import com.foodOrder.foodOrderingSystem.repo.RestaurentRepo;

@Service
public class RestaurantService {
	 @Autowired
	    private RestaurentRepo restaurantRepository;

	    public Restaurant saveRestaurant(Restaurant restaurant) {
	        return restaurantRepository.save(restaurant);
	    }

	    public List<Restaurant> getAllRestaurants() {
	        return restaurantRepository.findAll();
	    }

	    public Restaurant getRestaurantById(int id) {
	        return restaurantRepository.findById(id).orElse(null);
	    }

	    public void deleteRestaurant(int id) {
	        restaurantRepository.deleteById(id);
	    }

}
