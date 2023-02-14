import React from 'react'
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
//import {useParams} from "react-router-dom";

function Edit(){
   const [fname,setFname]=useState("");
   const [lname,setLname]=useState("");
   const [email,setEmail]=useState("");
   const [dob,setDob]=useState("");
   const [education,setEducation]=useState("");
   const [location,setLocation]=useState("");
   const [about,setAbout]=useState("");
   const [student,setStudent]=useState([]);

   const navigate=useNavigate();
   //const {id}=useParams();
   const locat=useLocation();

   const id=locat.pathname.split("/")[2];
   console.log(id)
   console.log(student);

   useEffect(() => {
     fetch("http://localhost:3000/students/"+id)
    .then(res=>res.json())
    .then(data=>setStudent(data))
   },[id])
   

   const update=(e)=>{
      e.preventDefault();     
    axios.put("http://localhost:3000/students/"+id,{
     fname,lname,email,dob,education,location,about
    }).then((res)=>{
      console.log(res);
    })
     navigate("/");
   }
  

      
       return (
        <div>        
            <div className="jumbotron">
      <div className="container">
         <h2 align="left" >Edit Student Details </h2>
         <form role="form" onSubmit={update}>
         <div className="row">
            <div className="col">
                    <label  className="form-label">First Name</label>
                    <input  className="form-control" placeholder="Enter your firstname" value={student.firstname}  onChange={()=>setFname(e.target.value)}/>
                </div>
              <div className="col">
                   <label  className="form-label">Last Name</label>
                   <input className="form-control" placeholder="Enter your lastname" value={student.lastname} onChange={()=>setLname(e.target.value)}/>
              </div>
            </div>
            <div className="row">
                <div className="col">
                    <label  className="form-label">Email</label>
                    <input  className="form-control" placeholder="Enter your email" value={student.email} onChange={()=>setEmail(e.target.value)}/>
                </div>
              <div className="col">
                   <label  className="form-label">DOB</label>
                   <input type="date" className="form-control"value={student.dob} onChange={()=>setDob(e.target.value)} />
              </div>
            </div>
            <div className="row">
                <div className="col">
                    <label  className="form-label">Education</label>
                    <input  className="form-control" placeholder="Enter your education" value={student.education} onChange={()=>setEducation(e.target.value)}/>
                </div>             <div className="col">
                   <label  className="form-label">Location</label>
                   <input  className="form-control" placeholder="Enter your location" value={student.location} onChange={()=>setLocation(e.target.value)} />
              </div>
            </div>
            <div className="col">
                <label className="form-label">About</label>
               <textarea className="form-control" rows="3" value={student.about} onChange={()=>setAbout(e.target.value)}></textarea>
           </div> 
             <div className="col-12">
               <button type="submit" className="btn btn-dark">Submit</button>
             </div>
         </form>
      </div>
   </div>
        </div>
    )
}

export default Edit
