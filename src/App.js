import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/UI/Header";
import CharactersList from "./components/Characters/CharactersList";
import Search from "./components/UI/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://thronesapi.com/api/v2/Characters`);

      setItems(result.data);
      setIsLoading(false);
    };  
    fetchItems();

    
  }, []);

  
   const filteredChars = items.filter(item => (
     item.fullName.toLowerCase().includes(search.toLocaleLowerCase())
   ))
 
  return (
    <div className="container">
      <Header />
      <Search handleChange={(e) => setSearch(e.target.value)} />
      <CharactersList isLoading={isLoading} items={filteredChars} />
    </div>
  );
}

export default App;
