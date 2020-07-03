import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import CharacterList from "./components/CharacterList";
import Search from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const func = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    func();
  }, [query]);
  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterList isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
