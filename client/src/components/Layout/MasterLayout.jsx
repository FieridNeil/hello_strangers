import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "@material-ui/core/Container";

const MasterLayout = ({ children }) => {
  return (
    <Container maxWidth={false} style={{ margin: 0, padding: 0 }}>
      {/* <Navbar /> */}

      {children}
    </Container>
  );
};

export default MasterLayout;
