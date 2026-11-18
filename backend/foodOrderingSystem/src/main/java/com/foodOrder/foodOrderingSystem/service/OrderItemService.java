package com.foodOrder.foodOrderingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodOrder.foodOrderingSystem.entity.OrderItems;
import com.foodOrder.foodOrderingSystem.repo.OrderItemsRepo;

@Service
public class OrderItemService {
	@Autowired
    private OrderItemsRepo orderItemRepository;

    public OrderItems saveOrderItem(OrderItems orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public List<OrderItems> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public OrderItems getOrderItemById(int id) {
        return orderItemRepository.findById(id).orElse(null);
    }

    public void deleteOrderItem(int id) {
        orderItemRepository.deleteById(id);
    }

}
