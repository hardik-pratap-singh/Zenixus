import { React, useState } from "react";
import "../styles/signup.css";
// import Signup from "./Signup";
import { Link, useNavigate } from "react-router-dom";
// useNavigate
import Swal from "sweetalert2";

function Login() {
  let navigate = useNavigate();
  const [user_id, setuserid] = useState("");
  const [password, setpassword] = useState("");


  const showalert = () => {
    Swal.fire({
      title: "Login Failed !",
      text: "Enter correct credentials or SignUp First !!",
      icon: "warning",
      confirmButtonText: "Try Again",
    }).then(function () {
      // Redirect the user
      // window.location.href = "/new-page";
      navigate("/") ;
    });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/backend/login", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      // "body" : JSON.stringify({"user_id" : user_id , "password" : password}) 
      "body": JSON.stringify({ user_id, password })
    })

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.session_id);
      navigate("/afterlogin");
    }

    else {
      showalert();
      // alert(`<h2>Enter correct credentials or SignUp First !!</h2>`);
      navigate("/");
    }

  }

  const handleChange1 = (e) => {
    setuserid(e.target.value);
    console.log(user_id);

  }
  const handleChange2 = (e) => {
    setpassword(e.target.value);
    console.log(password);
  }


  return (
    <>


      <div className="mainhead">
        <div className="header" style={{ "marginBottom": "-90px" }}
        >
          <h1 style={{ "marginTop": "20px" }}>Login</h1>
          <br /><br />
        </div>
        <div className="login-page">
          <div className="form">
            <form method="post" onSubmit={handlesubmit}  >
              <input type="text" onChange={handleChange1} value={user_id} name="user_id" placeholder="Enter Your User Id" required />
              <br />
              <br />
              <input type="password" onChange={handleChange2} value={password} name="password" placeholder="Enter Your Password" required />
              <br />
              <br />
              <input id="btn" type="submit" value="Login" />
              <br />
              <p><br />
                Don't have an account ?
                <Link to="/Signup">
                  Register now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
