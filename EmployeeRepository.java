package com.example.crudApplication2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.crudApplication2.model.Employee;

@org.springframework.stereotype.Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}