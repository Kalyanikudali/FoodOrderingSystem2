
package com.foodOrder.foodOrderingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.foodOrder.foodOrderingSystem.entity.Customers;
import com.foodOrder.foodOrderingSystem.repo.CustomerRepo;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo customerRepository;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    // Customer Registration
    public String registerCustomer(Customers customer) {

        if (customerRepository.findByEmail(customer.getEmail()).isPresent()) {
            return "Email already registered. Please login.";
        }

        customer.setPassword(
                passwordEncoder.encode(customer.getPassword())
        );

        customerRepository.save(customer);

        return "Registration successful!";
    }

    // Customer Login
    public String loginCustomer(String email, String password) {

        Customers customer = customerRepository.findByEmail(email)
                .orElse(null);

        if (customer == null) {
            return "Customer not registered. Please register first.";
        }

        if (!passwordEncoder.matches(password, customer.getPassword())) {
            return "Invalid email or password.";
        }

        return "Login successful!";
    }

    // Existing methods
    public Customers saveCustomer(Customers customer) {
        return customerRepository.save(customer);
    }

    public List<Customers> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customers getCustomerById(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }
}
