import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import database from "./firebase";

import "./Chats.css";

const Chats = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="chats">
      {people.map((person) => (
        <Chat
          name={person.name}
          message={person.message}
          timestamp={`${person.time} ago`}
          profilePic={person.url}
        />
      ))}
    </div>
  );
};

export default Chats;
