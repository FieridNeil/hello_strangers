import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sha256 from "crypto-js/sha256";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import DisplayMessage from "../HelperComponents/DisplayMessage";

const Signup = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [cookies, setCookies] = useCookies();

  const SubmitHandler = (e) => {
    e.preventDefault();

    e.target.reset();
    if (password.toString() !== confirmPassword.toString()) {
      setError("Passwords do not match");
      return;
    }
    fetch("http://localhost:3001/signup", {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username: username, password: sha256(password).toString() }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "Failed") {
          setError("Username already existed");
        } else {
          setCookies("sessionID", res.sessionID, { maxAge: 43200 });
          props.history.push("/main");
        }
      })
      .catch((err) => console.log("Failed to sign up", err));
  };

  return (
    <>
      {error && <DisplayMessage type='error'>{error}</DisplayMessage>}
      <form onSubmit={SubmitHandler}>
        <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
          <TextField required placeholder='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ padding: "20px 0 0 0", margin: "10px" }}>
          <TextField required placeholder='Password' variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
          <TextField
            required
            placeholder='Confirm Password'
            variant='outlined'
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type='submit' variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
};

export default withRouter(Signup);
