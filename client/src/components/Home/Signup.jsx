import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sha256 from "crypto-js/sha256";

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isMatch, setIsMatch] = useState(true);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (password.toString() !== confirmPassword.toString()) {
      setIsMatch(false);
      return;
    } else {
      setIsMatch(true);
    }
    fetch("http://localhost:3001/signup", {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username: username.toString(), password: password.toString() }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsername();
        setPassword();
        setConfirmPassword();
      })
      .catch((err) => console.log("Failed to sign up", err));
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
        <TextField required placeholder='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div style={{ padding: "20px 0 0 0", margin: "10px" }}>
        <TextField required placeholder='Password' variant='outlined' type='password' onChange={(e) => setPassword(sha256(e.target.value))} />
      </div>
      <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
        <TextField
          required
          error={!isMatch}
          helperText={isMatch === false ? "Passwords do not matched" : ""}
          placeholder='Confirm Password'
          variant='outlined'
          type='password'
          onChange={(e) => setConfirmPassword(sha256(e.target.value))}
        />
      </div>
      <div>
        <Button type='submit' variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default Signup;
