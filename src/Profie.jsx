import React, { useState, useContext  } from "react";
import { ProductContext } from "./Context";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [alert, setAlert] = useState("");
  const { setIsLogin } = useContext(ProductContext);
  

  

  function handleChange(event) {
    const { value, type } = event.target;
    if (type === "text") {
      setUserName(value);
    }
    if (type === "password") {
      setpassword(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const username = "saad";
    const passWord = "1234";

    if (userName === username && password === passWord) {
      setAlert("login successful")
      setIsLogin(true)
    }
    if (userName !== username && password === passWord) {
      return setAlert(" userName wrong");
    }
    if (userName === username && password !== passWord) {
      return setAlert("Password wrong");
    }
    if (userName !== username && password !== passWord) {
      return setAlert("username and password wrong");
    }
  }
  
     


  return (
    <div className="div-profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          onChange={handleChange}
          name="userName"
          value={userName}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <button>Login</button>

        <p>{alert}</p>

       

        
      </form>
    </div>
  );
}
