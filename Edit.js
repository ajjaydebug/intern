import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Swal from 'sweetalert2';
 

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    role: '',
    salary: '',
    email: '',
  });

  const [existingEmails, setExistingEmails] = useState([]); // To store existing emails in the database
  const [emailError, setEmailError] = useState(false); // State to store email validation error

  // Fetch employee data and existing emails
  useEffect(() => {
    axios.get(`http://localhost:8081/api/employees/getById/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });

    // Fetch all existing email ids in the database to validate
    axios.get('http://localhost:8081/api/employees/getAllEmails')
      .then((res) => {
        setExistingEmails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching emails:', error);
      });
  }, [id]);

  // Handle form field changes
  const handleChanges = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  // Function to check if email already exists
  const checkEmailExists = (email) => {
    axios.get(`http://localhost:8081/api/employees/checkEmail/${email}`)
      .then((res) => {
        if (res.data) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      })
      .catch((error) => {
        console.error('Error checking email:', error);
      });
  };

  // Handle form submission (update employee data)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email is already in use
    checkEmailExists(employee.email);

   

    axios.put(`http://localhost:8081/api/employees/update/${id}`, employee)
      .then((res) => {
        console.log('Employee updated successfully:', res.data);
        navigate('/tabledata');
      })
      .catch((error) => {
        console.log("----",error)
        Swal.fire('This email already exists with another employee',error); 
      });
  };

  return (
    <div className="edit-form">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChanges}
          required
        />
        
        <label>Employee Role</label>
        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleChanges}
          required
        />
        
        <label>Employee Salary</label>
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChanges}
          required
        />

        <label>Employee Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChanges}
          required
        />
        {emailError && <span style={{ color: 'red' }}>Email ID already exists!</span>}

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
