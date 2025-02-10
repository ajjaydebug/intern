package com.example.crudApplication2.controller;


import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudApplication2.model.Employee;
import com.example.crudApplication2.service.EmployeeService;



@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
 
    @Autowired
    private EmployeeService employeeService;
 
    @CrossOrigin
    @PostMapping("/postData")
    public Employee createEmployee(@RequestBody Employee employee) {
    	System.out.println("hii");
        return employeeService.createEmployee(employee);
    }

    @CrossOrigin 
    @GetMapping("/getAll")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
    @CrossOrigin 
    @GetMapping("/getById/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }
    @CrossOrigin 
    @PutMapping("/update/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }
    @CrossOrigin 
    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}
