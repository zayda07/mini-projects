import React from "react";
import "./Cards.css";
import Card from "../card/Card";
import Retos from "../../retosList";
const Cards = () => {
    console.log(Retos);
    return (
        <div className="box grid-responsive ">
            {Retos.map((reto) => (
                <Card key={reto.id} props={reto} />
            ))}
        </div>
    );
};

export default Cards;
