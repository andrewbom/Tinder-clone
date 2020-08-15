import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: "https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg",
    },
    {
      name: "mark zuckerberg",
      url: "https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
            <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
