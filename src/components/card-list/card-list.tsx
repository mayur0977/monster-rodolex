import React from "react";
import Card from "../card/card";
import { CardListDetail } from "./card-list.model";
import "./card-list.styles.css";

interface cardListProps {
  monsters: CardListDetail.RootObject[];
}
const CardList = (cardListProps: cardListProps) => {
  return (
    <div className="card-list">
      {cardListProps.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
