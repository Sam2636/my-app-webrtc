

import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import socketio from "socket.io-client";
import "./CallScreen.css";

function CallScreen() {
  const params = useParams();
  const localUsername = params.username;
  const roomName = params.room;
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

	return (
    <div>
      <label>{"Username: " + localUsername}</label>
      <label>{"Room Id: " + roomName}</label>
      <video autoPlay muted playsInline ref={localVideoRef} />
      <video autoPlay muted playsInline ref={remoteVideoRef} />
    </div>
  );
}

export default CallScreen;