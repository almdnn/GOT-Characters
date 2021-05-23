import React from "react";
import Spinner from "../UI/Spinner";
import CharacterItem from "./CharacterItem";

const CharactersList = (props) => {
  return props.isLoading ? (
    <Spinner className="center" />
  ) : (
    <section className="cards">
      {props.items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharactersList;
