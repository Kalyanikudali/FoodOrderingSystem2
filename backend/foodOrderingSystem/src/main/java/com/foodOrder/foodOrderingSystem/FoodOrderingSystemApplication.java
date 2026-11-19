package com.foodOrder.foodOrderingSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FoodOrderingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodOrderingSystemApplication.class, args);
	}

	@GetMapping("/")
	public String home() {
		return "Food Ordering System Backend is running successfully!";
	}

}
