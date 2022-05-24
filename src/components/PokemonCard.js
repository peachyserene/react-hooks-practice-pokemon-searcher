import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites }) {
  const [altImage, setAltImage] = useState(true);

  function swapImage(e) {
    setAltImage(!altImage);
  }

  return (
    <Card>
      <div onClick={swapImage}>
        <div className="image">
          <img alt="oh no!" src={altImage ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
