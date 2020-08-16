import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

const ChatScreen = (props) => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {
      name: "Jay",
      image:
        "https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg",
      message: "whats up",
    },
    {
      name: "Jay",
      image:
        "https://tnimage.s3.hicloud.net.tw/photos/2020/AP/20200507/47ccf60fb6634e1ea95e9050979bf4ff.jpg",
      message: "whats up haha",
    },
    {
      message: "hihi",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH Jay ON 10/08/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message.message}>
            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={message.message}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message"
        />
        <button className="chatScreen__inputButton" type="submit" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
