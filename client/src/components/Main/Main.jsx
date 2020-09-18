import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import Chat from "../Chat/Chat";

const Main = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();
  const ws = new WebSocket("ws://localhost:3002");

  ws.onopen = (e) => {
    console.log("Socket opened", e);

    ws.onmessage = (e) => {
      console.log("Client received: ", e.data);
    };

    ws.send(JSON.stringify({ id: 1, data: "sent from id 1" }));
  };
  if (cookies.sessionID === undefined) {
    history.push("/login");
    return null;
  } else {
    return (
      <>
        <div>Main</div>
        <div>{cookies.sessionID}</div>
        <Chat />
        {console.log(cookies.sessionID)}
      </>
    );
  }
};

export default Main;
