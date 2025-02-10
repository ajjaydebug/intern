// Book.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './App.css';
import Swal from 'sweetalert2';
 
export default function Book() {
  const [values, setValues] = useState({
    id:'',
    name: '',
    role: '',
    salary: '',
    email:'',
  });
 
  const navigate = useNavigate();
 
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
 
    const jsonData = JSON.stringify(values);
 
    axios
      .post('http://localhost:8081/api/employees/postData', jsonData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the server knows you're sending JSON
        },
      })
      .then((res) => {
        console.log('Post operation successful', res, res.data);
        navigate('/tabledata');
 
      })
      .catch((error) => {
        console.log("----",error)
        Swal.fire('This email already exists with another employee',error); 
      });
  };
 
  const handleReset = () => {
    setValues({
      id:'',
      name: '',
      role: '',
      salary: '',
      email:'',
    });
  };
 
  return (
    <div className="container">
      <h1>Employee DataBase</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID*</label>
        <input
          type="number"
          placeholder="Enter Employee Id"
          name="id"
          onChange={handleChanges}
          required
          value={values.id}
        />
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          placeholder="Enter Employee Name"
          name="name"
          onChange={handleChanges}
          required
          value={values.name}
        />
        <label htmlFor="role">Role*</label>
        <input
          type="text"
          placeholder="Enter Employee Role"
          name="role"
          onChange={handleChanges}
          required
          value={values.role}
        />
        <label htmlFor="salary">Salary*</label>
        <input
          type="number"
          placeholder="Enter Employee Salary"
          name="salary"
          onChange={handleChanges}
          required
          value={values.salary}
        />

<label htmlFor="email">Email Id*</label>
        <input
          type="email"
          placeholder="Enter Employee Email Id"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
 
      {/* Navigation to employee table page */}
      <div>
        <Link to="/tabledata">Go to Employee Table</Link>
      </div>
    </div>
  );
}