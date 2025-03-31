import React from "react";
import "./index.css";
import Header from "./components/header";
// import ProductList from "./components/ProductList";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import cartStore from "./store/cartStore";

function App() {
  return (
    <Provider store={cartStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
