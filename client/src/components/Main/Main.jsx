import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();
  if (cookies.sessionID === undefined) {
    history.push("/login");
    return null;
  } else {
    return (
      <>
        <div>Main</div>
        <div>{cookies.sessionID}</div>
        {console.log(cookies.sessionID)}
      </>
    );
  }
};

export default Main;
