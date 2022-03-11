import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "./data";
import { useState, useEffect } from "react";
function App() {
  const { products } = data;
  const [items, setItems] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const elementsPerPage = 3;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setProductsTobeShown(index);
  }, [index]);

  const setProductsTobeShown = (i) => {
    const startIndex = elementsPerPage * i;
    const endIndex = elementsPerPage * (i + 1);
    setPrev(!(startIndex === 0));
    setNext(endIndex <= products.length);
    setItems(products.slice(startIndex, endIndex));
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const filterItems = (search) => {
    setItems(
      products.filter(({ name }) => {
        return name == search;
      })
    );
  };

  return (
    <div className="App">
      <Header
        countCartItems={cartItems.length}
        filterItems={filterItems}
      ></Header>
      <div className="row">
        <Main
          products={items}
          onAdd={onAdd}
          prev={prev}
          next={next}
          index={index}
          setIndex={setIndex}
        ></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
