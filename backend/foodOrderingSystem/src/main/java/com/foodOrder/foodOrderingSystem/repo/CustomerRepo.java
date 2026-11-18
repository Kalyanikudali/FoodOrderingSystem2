
package com.foodOrder.foodOrderingSystem.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodOrder.foodOrderingSystem.entity.Customers;

public interface CustomerRepo extends JpaRepository<Customers, Integer> {

    Optional<Customers> findByEmail(String email);

}
