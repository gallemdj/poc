// Characters.js
import React, { useState } from 'react'
import CharactersComp from "../Components/Characters"


const Characters = () => {

    const [characters, setCharacters] = useState(null);

    const reqApi = async () => {
        const api = await fetch("https://rickandmortyapi.com/api/character");
        const charactersApi = await api.json();
        setCharacters(charactersApi.results);
    };

    reqApi();

    return (
        <section className="Characters">
            {characters ? (
                <CharactersComp characters={characters} setCharacters={setCharacters} />
            ) : (
                <span>No Characters</span>
            )}
        </section>
    )
}


export default Characters