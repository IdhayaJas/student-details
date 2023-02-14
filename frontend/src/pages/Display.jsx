import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Display(){
     const [student,setStudent]=useState([]);

     useEffect(()=>{
       fetch("http://localhost:3000/students")
        .then(res=>res.json())
        .then(data=>setStudent(data))
     },[]);

     const del=async(id)=>{
       try{
      await axios.delete("http://localhost:3000/students/"+id)
       window.location.reload();
       }
       catch(err){
         console.log(err)
       }
       // alert(id)

     }
    
        return (
        <div>
            <h1>Display</h1>
            <div className="jumbotron">
            <div className="container">
             <Link to="/add"><button type="submit" className="btn btn-dark add">Add</button></Link>
           <table className="table table-bordered">
           <thead>
         <tr>
           <th>ID</th>
           <th>FirstName</th>
           <th>LastName</th>
           <th>Email</th>
            <th>DOB</th>
            <th>Education</th>
          <th>Location</th>
           <th>Action</th>
         </tr>
     </thead>
     <tbody>
     {student.map((result)=>(
      <tr key={result.id}>
      <th scope="row">{result.id}</th>
      <td>{result.firstname}</td>
      <td>{result.lastname}</td>
       <td>{result.email}</td>
        <td>{result.dob}</td>
         <td>{result.education}</td>
          <td>{result.location}</td>
           <td><Link to={'/edit/'+result.id}><button>Edit</button></Link><button onClick={()=>del(result.id)}>Delete</button></td> 
    </tr>
     ))}
    
  </tbody>
</table>
</div>
</div>
        </div>
    )
}

export default Display;
