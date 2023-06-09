import React from "react";
import "../styles/signup.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// useNavigate

function Signup() {

  let navigate = useNavigate();


  const func = () => {
    Swal.fire({
      title: "Good Job !",
      text: "Signed Up SuccesFully !!",
      icon: "success",
      confirmButtonText: "Login Now",
    }).then(function () {
      // Redirect the user
      // window.location.href = "/new-page";
      navigate("/") ;
    });
  }



  return (
    <>
      <div className="mainhead">

        <div className="header"  style={{"marginBottom": "-50px"}}>
          <h1 style={{"marginTop" : "20px"}}>SIGNUP HERE</h1>
        </div>
        <div className="login-page">
          <div className="form">
            <form method="post" onSubmit = {func} action="http://localhost:8080/backend/signup">
              <input type="text" name="user_id" placeholder="Enter Your User ID" required />
              <br />
              <input type="text" name="username" placeholder="Enter Your User Name" required />
              <br />
              <input type="text" name="first_name" placeholder="Enter Your First Name" required />
              <br />
              <input type="text" name="last_name" placeholder="Enter Your Last Name" required />
              <br />
              <input type="email" name="email" placeholder="Email" />
              <br />
              <input type="text" name="phone" placeholder="Phone Number" />
              <br />
              <input type="password" name="password" placeholder="Password" />
              <br />
              <input style={{width : "300px "}} type="text" name="role_id" placeholder="Enter[1:Manager][2:Lead][3:Dev]" />
              <br />
              <input id="btn" type="submit" value="Sign Up" />
              <br />
              <p><br />
                Already Registered ?
                <Link to="/">
                  Login now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
