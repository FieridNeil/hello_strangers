import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sha256 from "crypto-js/sha256";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import DisplayMessage from "../HelperComponents/DisplayMessage";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();
  const [error, setError] = useState();
  const history = useHistory();

  const SubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch(`http://localhost:3001/login`, {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username, password: sha256(password).toString() }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "Failed") {
          setError("Incorrect username or password");
        } else {
          console.log(res);
          setCookies("sessionID", res.sessionID, { maxAge: 43200 });
          history.push("/main");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {error && <DisplayMessage type='error'>{error}</DisplayMessage>}
      <form onSubmit={SubmitHandler}>
        <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
          <TextField required placeholder='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
          <TextField required placeholder='Password' variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Button type='submit' variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
