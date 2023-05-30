import { Routes, Route } from "react-router-dom"
import { useReducer } from "react";
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { initialState, updateProducts } from "./components/Store/store.reducers";
import HeroBanner from './components/HeroBanner';
import ProductCategory from './components/ProductCategory';
import ProductSpecific from './components/ProductSpecific';
import CartList from './components/CartList';
import UserContext from "./UserContext";

const App = () => {
  const [productDetails, dispatch] = useReducer(updateProducts, initialState);

  return (
    <div data-testid="app-test-id" className="App">
      <UserContext.Provider value={{ dispatch, productDetails }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/products">
            <Route index element={<ProductCategory />} />
            <Route path=":id" element={<ProductSpecific />} />
          </Route>
          <Route path="/categories">
            <Route path="men's clothing">
              <Route index element={<ProductCategory />} />
              <Route path=":id" element={<ProductSpecific />} />
            </Route>
            <Route path="women's clothing">
              <Route index element={<ProductCategory />} />
              <Route path=":id" element={<ProductSpecific />} />
            </Route>
            <Route path="electronics">
              <Route index element={<ProductCategory />} />
              <Route path=":id" element={<ProductSpecific />} />
            </Route>
          </Route>
          <Route path="cart" element={<CartList />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
