import playerData from "./playerData.js";
import { useState } from "react";

function BaseballCard(props) {
  const statsDisplay = Object.entries(props.stats).map(
    ([statName, statValue]) => (
      <p key={statName}>
        {statName}: {statValue}
      </p>
    )
  );

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  );
  // return (
  //   <div className="card">
  //     <h2>{props.name}</h2>
  //     <img src={props.imgURL} alt={props.name} />
  //   </div>
  // );
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgURL={player.imgUrl}
      key={player.cardId}
    />
  ));
  return <>{cards}</>;
}

export default App;
