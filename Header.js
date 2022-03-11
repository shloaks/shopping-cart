import React, { useState } from "react";

export default function Header(props) {
  const [Search, setSearch] = useState("");

  return (
    <header className="block row center">
      <div style={{ display: "flex" }}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="item name..."
        />
        <button onClick={() => props.filterItems(Search)}>Search</button>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>
      </div>
    </header>
  );
}
