import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sha256 from "crypto-js/sha256";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

const Login = ({ history }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();

  const SubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/login`, {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username, password: password.toString() }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCookies("sessionID", uuidv4());
        setUsername();
        setPassword();
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
        <TextField required placeholder='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
        <TextField required placeholder='Password' variant='outlined' type='password' onChange={(e) => setPassword(sha256(e.target.value))} />
      </div>
      <div>
        <Button type='submit' variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default withRouter(Login);
