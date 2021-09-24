import React from "react";
import "./Cards.css";
import Card from "../card/Card";
import Retos from "../../retosList";
import { useState } from "react";
import Search from "../search/Search";

const Cards = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [card, setCard] = useState(Retos);

    const handleChange = (items) => {
        if (items.target.value) {
            const result = card.filter((item) => {
                console.log("entra al if");
                if (
                    item.title
                        .toLocaleLowerCase()
                        .includes(items.target.value.toLocaleLowerCase())
                ) {
                    console.log("true");
                    return true;
                } else {
                    console.log("false");
                    return false;
                }
            });
            console.log("setcard1");
            setCard(result);
        } else {
            console.log("setcard2");
            setCard(Retos);
        }
        console.log("serSearchTitle");
        setSearchTitle(items.target.value);
    };

    return (
        <>
            <Search handleChange={handleChange} searchTitle={searchTitle} />
            <div className="box grid-responsive ">
                {card.map((reto) => (
                    <Card key={reto.id} props={reto} />
                ))}
            </div>
        </>
    );
};

export default Cards;
