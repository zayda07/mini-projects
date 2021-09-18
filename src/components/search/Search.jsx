import React from "react";
import "./Search.css";
/*const listItems = [];
const filter = filter.addEventListener("input", (e) => Search(e.target.value));*/

function Search() {
    /*listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });*/

    return (
        <div className="searchSection">
            <input type="text" id="filter" placeholder="Search" />
        </div>
    );
}

export default Search;
