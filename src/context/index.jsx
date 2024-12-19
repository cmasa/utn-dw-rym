import { createContext, useState, useEffect } from "react";
export const charactersContext = createContext([])

export default function CharactersProvider({ children }) {
  let [character, setCharacters] = useState([]);

  const mostrarData = async () => {

    let infoAPI = await fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => { return resp.json() })
      .catch((error) => console.log("error:" + error));

    setCharacters(infoAPI.results)


  }
  useEffect(() => {
    mostrarData();
  }, [])


  return (
    <charactersContext.Provider value={character}>
      {children}
    </charactersContext.Provider>
  )

}