import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const DisplayText = ({ children, other }) => {
  return (
    <div
      style={{
        backgroundColor: other ? "#ddd" : "#54c0ff",
        display: "inline-block",
        padding: 10,
        borderRadius: "5px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        margin: "0 10px",
      }}>
      {children}
    </div>
  );
};

const ChatWindow = () => {
  return (
    <div>
      <Paper variant='elevation' elevation={2} style={{ height: "60px" }}>
        <Avatar src='https://avatarfiles.alphacoders.com/143/thumb-143737.png' />
        Officer Caitlyn
      </Paper>
      <Grid container direction='column' justify='flex-end' style={{ height: "80vh", borderRight: "1px solid #ccc", borderLeft: "1px solid #ccc" }}>
        <div style={{ display: "flex", flexDirection: "row-reverse", margin: 5, alignContent: "right" }}>
          <Avatar src='https://avatarfiles.alphacoders.com/143/thumb-143737.png' />
          <DisplayText>Hello</DisplayText>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse", margin: 5, alignContent: "right" }}>
          <Avatar src='https://avatarfiles.alphacoders.com/143/thumb-143737.png' />
          <DisplayText>How are you?</DisplayText>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: 5, alignContent: "right" }}>
          <Avatar src='https://avatarfiles.alphacoders.com/839/thumb-83917.jpg' />
          <DisplayText other>I'm doing great</DisplayText>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: 5, alignContent: "right" }}>
          <Avatar src='https://avatarfiles.alphacoders.com/839/thumb-83917.jpg' />
          <DisplayText other>How about you?</DisplayText>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse", margin: 5, alignContent: "right" }}>
          <Avatar src='https://avatarfiles.alphacoders.com/143/thumb-143737.png' />
          <DisplayText>Fan-fucking-tastic</DisplayText>
        </div>
      </Grid>
    </div>
  );
};

export default ChatWindow;
