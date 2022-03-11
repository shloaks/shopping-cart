import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd, prev, next, index, setIndex } = props;
  console.log(prev, next, index);
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
      <div style={{ width: "10%", margin: "auto" }}>
        {prev ? <button onClick={() => setIndex(index - 1)}>Prev</button> : ""}
        {next ? <button onClick={() => setIndex(index + 1)}>next</button> : ""}
      </div>
    </main>
  );
}
