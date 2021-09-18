import React from "react";
import "./Card.css";

const Card = ({ props }) => {
    return (
        <>
            <div className="card">
                <div className="title">
                    <p>{props.title}</p>
                </div>
                <img className="img" src={props.image} alt={props.title} />

                <button className="button">Ver</button>
            </div>
        </>
    );
};

export default Card;
