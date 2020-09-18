import React from "react";
import Alert from "@material-ui/lab/Alert";

const DisplayMessage = ({ type, children }) => {
  return (
    <div>
      <Alert severity={type}>{children}</Alert>
    </div>
  );
};

export default DisplayMessage;
