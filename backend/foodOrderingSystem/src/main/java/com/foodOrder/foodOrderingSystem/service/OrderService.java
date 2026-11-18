package com.foodOrder.foodOrderingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodOrder.foodOrderingSystem.entity.Orders;
import com.foodOrder.foodOrderingSystem.repo.OrderRepo;
@Service
public class OrderService {
	
	 @Autowired
	    private OrderRepo orderRepository;

	    public Orders saveOrder(Orders order) {
	        return orderRepository.save(order);
	    }

	    public List<Orders> getAllOrders() {
	        return orderRepository.findAll();
	    }

	    public Orders getOrderById(int id) {
	        return orderRepository.findById(id).orElse(null);
	    }

	    public void deleteOrder(int id) {
	        orderRepository.deleteById(id);
	    }
	

}
