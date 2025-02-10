package com.example.crudApplication2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudApplication2.model.Employee;
import com.example.crudApplication2.repository.EmployeeRepository;

@Service
public class EmployeeService {
 
    @Autowired
    private EmployeeRepository employeeRepository;
 
    // Create Employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
 
    // Get all Employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
 
    // Get Employee by ID
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }
 
    // Update Employee
    public Employee updateEmployee(Long id, Employee employee) {
        if (employeeRepository.existsById(id)) {
            employee.setId(id);
            return employeeRepository.save(employee);
        } else {
            return null;
        }
    }
 
    // Delete Employee
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}