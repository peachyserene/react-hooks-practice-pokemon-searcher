import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeDex }) {
  let pokeList = pokeDex.map((item) => {
    return (
      <PokemonCard
        key={item.id}
        id={item.id}
        name={item.name}
        hp={item.hp}
        sprites={item.sprites}
      />
    );
  });
  return <Card.Group itemsPerRow={6}>{pokeList}</Card.Group>;
}

export default PokemonCollection;
