import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// useNavigate
import Table from './Table';

const Home = () => {
  const [details, setDetails] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {


    const data = localStorage.getItem('token');
    if (!data) {
      alert("Not Authenticated !!")
      navigate("/");
    }
    else {
      const func = async () => {
        const response = await fetch(`http://localhost:8080/getmyreportees/${data}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const json = await response.json();
        setDetails(json);
        console.log(json);
      }



      func();
    }
  }, []);

  
  return (
    <div>
      <h3 className = "my-3" style={{"textAlign" : "center"}}>"Welcome To The Landing Page !"</h3>
      <table class="table table-striped my-5">
        <thead>
          <tr>
            <th scope="col">User_ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {
            details.map((ele, index) => {
              return (<>
                {/* <h1>{ele.username}</h1>
              <h1>{ele.password}</h1>
              {
                ele.role_id === 2 ? <h2>Role : Lead</h2> : <h2>Role : Developer</h2>
              } */}
                <Table key={index} userid = {ele.user_id} username = {ele.username} name = {`${ele.first_name + ele.last_name}`} email = {ele.email} phone = {ele.phone} role = {ele.role_id} />
              </>)
            })  
          }

        </tbody>
      </table>


    </div >
  )
}

export default Home 
