import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Jay"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg"
      />

      <Chat
        name="Mark"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg"
      />

      <Chat
        name="John"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg"
      />

      <Chat
        name="Ann"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg"
      />
    </div>
  );
};

export default Chats;
