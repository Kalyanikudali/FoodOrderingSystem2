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

import com.foodOrder.foodOrderingSystem.entity.OrderItems;
import com.foodOrder.foodOrderingSystem.service.OrderItemService;

@RestController
@RequestMapping("/orderitems")
@CrossOrigin(origins = "http://localhost:5173")

public class OrderItemsController {
	 @Autowired
	    private OrderItemService orderItemService;

	    @PostMapping("/save")
	    public OrderItems saveOrderItem(@RequestBody OrderItems orderItem) {
	        return orderItemService.saveOrderItem(orderItem);
	    }

	    @GetMapping("/getall")
	    public List<OrderItems> getAllOrderItems() {
	        return orderItemService.getAllOrderItems();
	    }

	    @GetMapping("/{id}")
	    public OrderItems getOrderItemById(@PathVariable int id) {
	        return orderItemService.getOrderItemById(id);
	    }

	    @DeleteMapping("/delete/{id}")
	    public String deleteOrderItem(@PathVariable int id) {
	        orderItemService.deleteOrderItem(id);
	        return "Order item deleted successfully";
	    }

}
