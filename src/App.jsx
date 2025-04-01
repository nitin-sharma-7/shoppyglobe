import React from "react";
import "./index.css";
import Header from "./components/Header";

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
