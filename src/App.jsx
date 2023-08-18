import CartContextComponent from "./context/CartContext"
import HomeContainer from "./compoments/pages/home/HomeContainer";
import ItemDetailContainer from "./compoments/pages/itemDetail/ItemDetailContainer";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextComponent>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/itemDetail/" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </CartContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
