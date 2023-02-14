const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
//const bodyparser=require("body-parser");

const app=express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"))




// app.get("/form",(req,res)=>{
//     res.sendFile(__dirname+"/public/index.html")
// })

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"student_details"
});
app.post("/students",(req,res)=>{
    const sql="INSERT into student(firstname,lastname,email,dob,education,location,about) VALUES(?)";
    const values=[
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.dob,
        req.body.education,
        req.body.location,
        req.body.about
    ];
    con.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Inserted Successfully");
    })
})

app.get("/students",(req,res)=>{
    const sql="SELECT * from student";
    con.query(sql,(err,data)=>{
     if(err) return res.json(err);
     return res.json(data);
    })

})


app.get("/students/:id",(req,res)=>{
    const studentid=req.params.id;
    const sql="SELECT * from student where id=?";
    con.query(sql,[studentid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})






app.put("/students/:id",(req,res)=>{
   const studentid=req.params.id;
   const sql="UPDATE student SET 'firstname'=?,'lastname'=?,'email'=?,'dob'=?,'education'=?,'location'=?,'about'=? WHERE id   =?"
   const values=[
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.dob,
    req.body.education,
    req.body.location,
    req.body.about,
];
con.query(sql,[...values,studentid],(err,data)=>{
    if(err) return res.json(err);
    return res.json("Inserted Successfully");
})
})

app.delete("/students/:id",(req,res)=>{
    const studentid=req.params.id;
    const sql="DELETE from student WHERE id=?";

    con.query(sql,[studentid],(err,data)=>{
        if(err) return res.json();
        return res.json("deleted");
    })
})




app.listen(3000,(req,res)=>{
    console.log("connected");
})

