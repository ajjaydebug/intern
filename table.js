import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Table() {
  // State to hold employee data
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();  

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // Replace with your API endpoint
    axios.get('http://localhost:8081/api/employees/getAll')
      .then((res) => {
        console.log('Employees fetched successfully:', res.data);
        setEmployees(res.data);  // Set the employee data to state
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);  // Empty dependency array means this runs once when the component mounts

  // Handle edit action (you can define your edit logic here)
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);  // Navigate to the edit page with the employee's id
  };
  // Handle delete action (make sure to call the API for deletion)
  const handleDelete = (id) => {
    console.log(`Delete employee with ID: ${id}`);
    axios.delete(`http://localhost:8081/api/employees/delete/${id}`)
      .then((res) => {
        console.log('Employee deleted:', res.data);
        // Refresh employee list after deletion
        setEmployees(employees.filter((employee) => employee.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  return (
    <div className="table">
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Employee Role</th>
            <th>Employee Salary</th>
            <th>Employee Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button onClick={() => handleEdit(employee.id)}>Edit</button>
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
