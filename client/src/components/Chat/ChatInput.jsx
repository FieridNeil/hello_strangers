import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ChatInput = () => {
  const SendHandler = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={SendHandler} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <TextField type='text' variant='outlined' margin='dense' fullWidth />
        <Button variant='contained' color='primary' style={{ margin: "0 10px" }} size='medium'>
          Send
        </Button>
      </form>
    </>
  );
};

export default ChatInput;
