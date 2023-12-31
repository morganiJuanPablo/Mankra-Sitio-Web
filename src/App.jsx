import CartContextComponent from "./context/CartContext";
import HomeContainer from "./compoments/pages/home/HomeContainer";
import ItemDetailContainer from "./compoments/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./compoments/pages/cart/CartContainer";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextComponent>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </CartContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
