import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKET_IO } from "../constants";

const SocketContext = createContext();

console.warn("SOCKET INITIALIZATION SHOULD ONLY RUN ONCE");
const socket = io(SOCKET_IO, {
  autoConnect: false,
});

const SocketContextProvider = ({ children }) => {
  const [socketConnected, setSocketConnected] = useState(false);

  // setup some socket events
  // TODO: do we need an effect here?
  useEffect(() => {
    console.warn("setup connect/disconnect events should ONLY happen once");
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    function onConnect() {
      // TODO: for error handling, whenever our socket disconnects
      // we can for example reload the page to force a reconnect or redirect to /error ...etc
      console.log("socket connected");
      setSocketConnected(true);
    }
    function onDisconnect() {
      console.log("socket disconnected");
      setSocketConnected(false);
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        socketConnected,
        setSocketConnected,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
