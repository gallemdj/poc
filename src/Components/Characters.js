import React, {useState} from "react";

export default function Characters(props) {
  
  const { characters, setCharacters } = props;
  
  const [ search, setSearch ] = useState('');

  return (
    <>
      <div className="filters">
        <div className="wrapper">
          <input
            type="text"
            placeholder="Search"
            onChange={e => setSearch(e.target.value)} 
            value={search} />
          </div>
      </div>

      <div className="wrapper">  
        <div className="characters">
          <div className="character-wrapper">
            {characters
              .filter(item => {
                if (!search) return true
                if (item.name.toLowerCase().includes(search.toLowerCase())) {
                  return true
                }
              }) 
              .map((character, index) => (
                <div className="character" key={index}>
                  <div>
                    <img src={character.image} alt={character.name} />
                  </div>
                  <div>
                    <h3>{character.name}</h3>
                    <p>
                      <span className="text-grey">Seasons: </span>
                      <span>{character.episode.length}</span>
                    </p>
                    <p>
                      <span className="text-grey">Specie: </span>
                      <span>{character.species}</span>
                    </p>
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
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}