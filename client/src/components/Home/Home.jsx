import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Login from "./Login";
import Signup from "./Signup";

const TabPanel = ({ children, value, index }) => {
  if (value === index) return <div hidden={value !== index}>{children}</div>;
  else return null;
};
const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
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

            {/* Login form  */}
            <TabPanel value={currentTab} index={0}>
              <Login />
            </TabPanel>

            {/* Sign up form  */}
            <TabPanel value={currentTab} index={1}>
              <Signup />
            </TabPanel>
          </Paper>
        </div>
      </center>
      {console.log("render")}
    </div>
  );
};

export default Home;
