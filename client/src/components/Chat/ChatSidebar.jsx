import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const ChatSidebar = () => {
  return (
    <Grid container direction='column'>
      <Card variant='outlined'>
        <CardHeader
          avatar={<Avatar src='https://avatarfiles.alphacoders.com/839/thumb-83917.jpg' />}
          action={
            <div style={{ color: "#aaa", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "0.7em", padding: "10px 10px 0 0" }}>
              1 min ago
            </div>
          }
          title='Sexy Ahri'
          subheader='Hey sexy, wanna come over?'
          onMouseOver={() => console.log("Mouseover!!")}
        />
      </Card>
      <Card variant='outlined'>
        <CardHeader
          avatar={<Avatar src='https://avatarfiles.alphacoders.com/839/thumb-83917.jpg' />}
          title='Sexy Ahri'
          subheader='Hey sexy, wanna come over?'
          action={
            <div style={{ color: "#aaa", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "0.7em", padding: "10px 10px 0 0" }}>
              1 min ago
            </div>
          }
        />
      </Card>
    </Grid>
  );
};

export default ChatSidebar;
