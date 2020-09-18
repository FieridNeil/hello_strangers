import React from "react";
import Grid from "@material-ui/core/Grid";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatSidebar from "./ChatSidebar";
import RoomSidebar from "./RoomSidebar";

const Chat = () => {
  return (
    <>
      <div>Chat</div>
      <Grid container>
        <Grid item xs={3} style={{ paddingRight: 50 }}>
          <ChatSidebar />
        </Grid>

        <Grid item xs={5} style={{ paddingRight: 50 }}>
          <Grid container direction='column'>
            <Grid item>
              <ChatWindow />
            </Grid>

            <Grid item>
              <ChatInput />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <h3>Public Rooms:</h3>
          <RoomSidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default Chat;
