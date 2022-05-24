import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  //pulls pokedata from server and stores it in PokeDex
  const [pokeDex, setPokeDex] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [renderedPoke, setRenderedPoke] = useState([]);

  //const [filteredSearch, setFilteredSearch] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((r) => r.json())
      .then((data) => setPokeDex(data));
  }, []);

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    // let filterBoy = pokeDex.filter((item) => {
    //   return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });
    setRenderedPoke(
      pokeDex.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, pokeDex]);

  //let filteredL;
  //filters out items that dont contain the search term
  // function onSearch(searchTerm) {
  //   console.log(searchTerm);
  //   setPokeDex(
  //     pokeDex.filter((item) => {
  //       if (searchTerm === "") {
  //         return true;
  //       } else {
  //         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  //       }
  //     })
  //   );
  // }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={handleSearchChange} searchTerm={searchTerm} />
      <br />
      <PokemonCollection pokeDex={renderedPoke} />
    </Container>
  );
}

export default PokemonPage;
