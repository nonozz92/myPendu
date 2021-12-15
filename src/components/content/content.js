import "./content.css";
import { ThemeContext } from "../mode/newtheme";
import Button from "../button/button";
import React, { useEffect, useState, useContext } from "react";

const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";
export function CallApi() {
  const { theme } = useContext(ThemeContext);
  const [word, setWord] = useState(undefined);
  useEffect(() => {
    (async () => {
      const { data } = await getWord();
      setWord(data);
      console.log(data);
    })();
    return () => {};
  }, []);

  const handleKeyDown = (event) => {
    if (GOOD_LETTER.includes(event.key)) {
      console.log("A key was pressed", event.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getWord = async () => {
    const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
    return await dataJson.json();
  };

  if (!word) {
    return <p>Waiting...</p>;
  }

  return (
    <div className={theme ? "content light" : "content dark"}>
      <h1>Jeu du pendu</h1>
      <p>{theme}</p>
      <h2>Mot à trouver :</h2>
      <br />
      <div class="word">
        <p>{word.word}</p>
      </div>
      <Button value={"Generer un mot"} onClick={() => getWord()} />
    </div>
  );
}

export default CallApi;
