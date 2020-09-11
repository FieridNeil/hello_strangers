import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TabPanel = ({ children, value, index }) => {
  if (value === index) return <div hidden={value !== index}>{children}</div>;
  else return null;
};
const Login = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <center>
        <div style={{ marginTop: "5%" }}>
          <div
            style={{
              fontSize: "3em",
              margin: "100px 0",
              padding: 25,
              fontWeight: "bold",
              background: "-webkit-linear-gradient(right, #264653, #2a9d8f, #e9c46a, #f4a261, #e76f51, #f4a261, #e9c46a, #2a9d8f, #264653)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            ღ(¯`◕‿◕´¯) ♫ ♪ ♫ 𝙷𝚎𝚕𝚕𝚘 𝚂𝚝𝚛𝚊𝚗𝚐𝚎𝚛𝚜 ♫ ♪ ♫ (¯`◕‿◕´¯)ღ
          </div>
          <Paper elevation={3} variant='elevation' style={{ width: "30%" }}>
            <Paper elevation={2}>
              <Tabs
                value={currentTab}
                indicatorColor='primary'
                textColor='primary'
                centered={true}
                variant='fullWidth'
                onChange={(e, selectedTab) => setCurrentTab(selectedTab)}>
                <Tab label='Login' />
                <Tab label='Sign Up' />
              </Tabs>
            </Paper>
            <TabPanel value={currentTab} index={0}>
              <div>
                <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
                  <TextField required placeholder='Username' variant='outlined' />
                </div>
                <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
                  <TextField required placeholder='Password' variant='outlined' type='password' />
                </div>
                <div>
                  <Button variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
                    Login
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
              <div>
                <div style={{ padding: "40px 0 0 0", margin: "10px" }}>
                  <TextField required placeholder='Username' variant='outlined' />
                </div>
                <div style={{ padding: "20px 0 0 0", margin: "10px" }}>
                  <TextField required placeholder='Password' variant='outlined' type='password' />
                </div>
                <div style={{ padding: "20px 0 20px 0", margin: "10px" }}>
                  <TextField required placeholder='Confirm Password' variant='outlined' type='password' />
                </div>
                <div>
                  <Button variant='contained' color='primary' size='large' style={{ marginBottom: "20px" }}>
                    Sign Up
                  </Button>
                </div>
              </div>
            </TabPanel>
          </Paper>
        </div>
      </center>
      {console.log("render")}
    </div>
  );
};

export default Login;
