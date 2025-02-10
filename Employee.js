//employee.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
 
 
export default function Employee() {
  const [values, setValues] = useState({
    id:'',
    name: '',
    role: '',
    salary: '',
  });
 
  const [books, setBooks] = useState([]);  // this will hold the fetched employees' data
 
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
 
    const jsonData = JSON.stringify(values);
   
    axios
      .post(`http://localhost:8081/api/employees/postData`, jsonData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the server knows you're sending JSON
        },
      })
      .then((res) => {
        console.log('Post operation successful', res, res.data);
        setBooks(prevBooks => [...prevBooks, res.data]);  // Optionally update state after POST
      })
      .catch((error) => {
        console.log('It was not successful', error);
      });
  };
 
  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/employees/getAll`)
      .then((res) => {
        console.log('Get Operation is Successful', res, res.data);
        setBooks(res.data);
      })
      .catch((error) => {
        console.log('The get operation is not successfully executed');
      });
  }, []); // Runs once when the component mounts
 
  const handleEdit = (id) => {
    alert('clicked');
    console.log('id when clicked', id);
    axios
      .put(`http://localhost:8081/update/${id}`)
      .then((res) => {
        console.log('The fetch operation is successfully executed', res.data);
      })
      .catch((error) => {
        console.log('It was not executed successfully');
      });
  };
 
  const handleDelete = (id) =>
  {
    alert("clicked");
    console.log("id when clicked",id);
    axios.delete(`http://localhost:8081/api/employees/delete/${id}`)
  }
 
  const handleReset=(e)=>
  {
    setValues({
      id:'',
      name:'',
      role:'',
      salary:'',
 
    })
  };
 
  return (
   <></>
   
      // <div className='back'>
      //   <div className="container">
      //     <h1>Employee DataBase</h1>
      //     <form onSubmit={handleSubmit}>

      //       {/*ID*/}
      //       <label htmlFor="id">Id*</label>
      //       <input
      //         type="number"
      //         placeholder="Enter Employee ID"
      //         name="id"
      //         onChange={(e) => handleChanges(e)}
      //         required
      //         value={values.id}
      //       />

         
      //       {/* NAME */}
      //       <label htmlFor="name">Name*</label>
      //       <input
      //         type="text"
      //         placeholder="Enter Employee Name"
      //         name="name"
      //         onChange={(e) => handleChanges(e)}
      //         required
      //         value={values.name}
      //       />
 
      //       {/* ROLE */}
      //       <label htmlFor="role">Role*</label>
      //       <input
      //         type="text"
      //         placeholder="Enter Employee Role"
      //         name="role"
      //         onChange={(e) => handleChanges(e)}
      //         required
      //         value={values.role}
      //       />
 
      //       {/* SALARY */}
      //       <label htmlFor="salary">Salary*</label>
      //       <input
      //         type="number"
      //         placeholder="Enter Employee Salary"
      //         name="salary"
      //         onChange={(e) => handleChanges(e)}
      //         required
      //         value={values.salary}
      //       />
 
      //       {/* BUTTONS IN THE BOTTOM */}
      //       <button type="submit">Submit</button>
      //       <button type="reset" onClick={handleReset}>Reset</button>
      //     </form>
      //   </div>
 
        // <div className="empty">
        //   <table>
        //     <thead>
        //       <tr>
        //         <th>Id</th>
        //         <th>Employee Name</th>
        //         <th>Employee Role</th>
        //         <th>Employee Salary</th>
        //         <th>Action</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {
        //         books.length > 0 ? (
        //           books.map((employee, i) => (
        //             <tr key={i}>
        //               <td>{employee.id}</td>
        //               <td>{employee.name}</td>
        //               <td>{employee.role}</td>
        //               <td>{employee.salary}</td>
        //               <td>
        //                 <button onClick={() => handleEdit(employee.id)}>Edit</button>
        //                 <button onClick={() => handleDelete(employee.id)}>Delete</button>
        //               </td>
        //             </tr>
        //           ))
        //         ) : (
        //           <tr>
        //             <td colSpan="5">No data available</td>
        //           </tr>
        //         )
        //       }
        //     </tbody>
        //   </table>
         
        // </div>
      // </div>
   
  );
}
 