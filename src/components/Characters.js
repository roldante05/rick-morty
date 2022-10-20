import React, { useState, useEffect } from "react";

const Characters = () => {
  // const { characters, setCharacters } = props;
  //setear los hooks useState
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la API

  const api = "https://rickandmortyapi.com/api/character";

  const reqApi = async () => {
    const response = await fetch(api);
    const dato = await response.json();
    setCharacters(dato.results);
    // console.log(dato.results);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };
  //metodo de filtrado
  //funcion de busqueda

  let resultado = [];

  if (!search) {
    resultado = characters;
  } else {
    resultado = characters.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <div className="">
      <div className="">
        <input value={search} onChange={searcher} type="text" placeholder="Por ej: Rick" className="form-control"/>
      </div>

      <div className="characters">
        <div className="container-characters">
          {resultado.length === 0 ? (
            <p className="font">No hay personajes</p>
          ) : (
            ""
          )}
          {!search ? (
            <p className=""> Busca personajes de Rick y Morty</p>
          ) : (
            resultado.map((character, id) => (
              <div className="character-container" key={id}>
                <div>
                  <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3> {character.name} </h3>

                  <h6>
                    {character.status === "Alive" ? (
                      <>
                        <span className="alive" />
                        Alive
                      </>
                    ) : (
                      <>
                        <span className="dead" />
                        Dead
                      </>
                    )}
                  </h6>
                  <p>
                    <span className="text-grey"> Episodios</span>
                    <span> {character.episode.length} </span>
                  </p>
                  <p>
                    <span className="text-grey"> Especie: </span>
                    <span> {character.species} </span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Characters;
