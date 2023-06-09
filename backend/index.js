require("dotenv").config() ; 

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
const bodyParser = require("body-parser");
const session = require('express-session');
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
const alert = require("alert") ;
const mysql = require('mysql2');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json()) ; 

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.post("/backend/signup", (req, res) => {
  const user_id = req.body.user_id;
  const username = req.body.username;
  const first_name = req.body.first_name ; 
  const last_name = req.body.last_name ; 
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const role_id = req.body.role_id; 

 
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    
    var sql1 = `INSERT INTO users (user_id, username, password, role_id) VALUES ('${user_id}', '${username}' ,'${password}' ,'${role_id}')`;
    var sql2 = `INSERT INTO personal_details (user_id, first_name, last_name, email, phone) VALUES ('${user_id}', '${first_name}', '${last_name}', '${email}', '${phone}')`;

    con.query(sql1, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into users table");
    });

    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into personal_details table");
    });
  });

  res.send("<script>alert('You are registered Successfully'); window.location.href = 'http://localhost:3000/afterlogin';</script>");
})

app.post("/backend/login", (req, res) => {
    // res.send("Welcome to Login Page ! ")
    const user_id = req.body.user_id;
    const password = req.body.password;
    console.log(user_id) ; 
    console.log(password) ;
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      // console.log("Yaha aa gya")
    //   console.log(userid);
    //   console.log(passwd);
      let sql = `select * from users where user_id = '${user_id}' and password = '${password}' `;
      con.query(sql, function (err, result) {
        // console.log(err);
        console.log(result);
        
        if (result.length === 0) {
          // res.send("<script>alert('Incorrect Login OR Password'); window.location.href = 'http://localhost:3000/Login';</script>")
          res.status(404).json({"success" : false})
        }
        else {
          // res.sendFile(path.join(__dirname , "/views/loginchecksuccess.html")) ; 
          sess = req.session;
          sess.user_id = user_id; // equivalent to $_SESSION['email'] in PHP.
          // sess. = "abc" ;
            // alert('You are succesfully Logged In');
            // res.redirect("http://localhost:8080/getmyreportees")
          // res.send("<script>alert('You are succesfully Logged In'); window.location.href = 'http://localhost:3000/afterlogin';</script>")
          res.status(200).json({"success" : true , "session_id" : sess.user_id})  ; 
        
  
        }
  
      });
    });
  });
  
  //Here I will show list of reportees !! 
app.get("/getmyreportees/:id" , (req, res)=>{
     let id = req.params.id ; 
    // console.log(req.session)
    // sess=req.session ;
    // a=sess.user_id; 
    console.log(id) ; 
    if(!id){
        return res.json({"success" : false}) ; 
    }


    if(id == 1){
        let resa = [] ; 
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            
            
            // var sql1 = `select * from users where role_id in (2 , 3)`
            var sql1 = `SELECT *
            FROM users
            NATURAL JOIN personal_details
            WHERE users.user_id = personal_details.user_id AND role_id in (2,3);`
            con.query(sql1, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted into users table");
              resa = result ; 
              res.send(result) ;
            });
        
            
          });


          
    }
    else if(id == 2){
        let resa = []; 
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        
            
            // var sql1 = `select * from users where role_id in (3)`
            var sql1 = `SELECT *
            FROM users
            NATURAL JOIN personal_details
            WHERE users.user_id = personal_details.user_id AND role_id in (3);`
            con.query(sql1, function (err, result) {
              if (err) throw err;
            //   console.log("1 record inserted into users table");
              resa = result ; 
              res.send(result) ; 
            });
          });


    }

    else if ( id == 3){
        res.send("Developer") ; 
    }

})




app.post("/backend/logout" , (req , res) => {
  sess=req.session ;
  a=sess.userid; 
  req.session.destroy((err)=>{
    if(err){
      return console.log(err);
    }
    // res.redirect('/')
    res.send(`<script>alert('Bye ${a} ! Hope To see you again !'); window.location.href = '/';</script>`)
  } ); 
  
  // res.redirect

})




const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
