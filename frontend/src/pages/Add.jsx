import React from 'react'
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add(){
   const [fname,setFname]=useState("");
   const [lname,setLname]=useState("");
   const [email,setEmail]=useState("");
   const [dob,setDob]=useState("");
   const [education,setEducation]=useState("");
   const [location,setLocation]=useState("");
   const [about,setAbout]=useState("");
   //const [student,setStudent]=useState([]);

   const navigate=useNavigate();

   const insert=(e)=>{
      e.preventDefault();
      //  const studentdata={fname,lname,email,dob,education,location,about};
      //  console.log(studentdata)
      //     fetch("http://localhost:3000/students",{
      //   method:"POST",
      //   body:JSON.stringify({
      //      fname:fname,
      //      lname:lname,
      //      email:email,
      //      dob:dob,
      //      education:education,
      //      location:location,
      //      about:about,
      //   }),
      //   headers:{
      //     "content-type" :"application/json"
      //   },
     
      // })  
      // .then(res => res.json())
      // .then(data => console.log(data))
      try{
     axios.post("http://localhost:3000/students",{
      fname,lname,email,dob,education,location,about
    }).then((res)=>{
      console.log(res);
    })
     navigate("/");
  }
  catch(err){
    console.log(err);
  }
   }
       return (
        <div>
            <div className="jumbotron">
      <div className="container">
         <h2 align="left" >Add Student Details</h2>
         <form role="form" onSubmit={insert}>
         <div className="row">
            <div className="col">
                    <label  className="form-label">First Name</label>
                    <input  className="form-control" placeholder="Enter your firstname" onChange={(e)=>setFname(e.target.value)}/>
                </div>
              <div className="col">
                   <label  className="form-label">Last Name</label>
                   <input className="form-control" placeholder="Enter your lastname" onChange={(e)=>setLname(e.target.value)}/>
              </div>
            </div>
            <div className="row">
                <div className="col">
                    <label  className="form-label">Email</label>
                    <input  className="form-control" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              <div className="col">
                   <label  className="form-label">DOB</label>
                   <input type="date" className="form-control" onChange={(e)=>setDob(e.target.value)} />
              </div>
            </div>
            <div className="row">
                <div className="col">
                    <label  className="form-label">Education</label>
                    <input  className="form-control" placeholder="Enter your education" onChange={(e)=>setEducation(e.target.value)}/>
                </div>
              <div className="col">
                   <label  className="form-label">Location</label>
                   <input  className="form-control" placeholder="Enter your location" onChange={(e)=>setLocation(e.target.value)} />
              </div>
            </div>
            <div className="col">
                <label className="form-label">About</label>
               <textarea className="form-control" rows="3" onChange={(e)=>setAbout(e.target.value)}></textarea>
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

export default Add
