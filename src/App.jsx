import React from "react"; // Import React
import "./index.css"; // Import global styles
import Header from "./components/Header"; // Import the Header component

import { Outlet } from "react-router"; // Import Outlet to render nested routes
import { Provider } from "react-redux"; // Import Provider to integrate Redux store
import cartStore from "./store/cartStore"; // Import the Redux store for cart management

// Main App component
function App() {
  return (
    // Wrap the entire app with Redux Provider to make the store accessible globally
    <Provider store={cartStore}>
      {/* Render the Header component */}
      <Header />

      {/* Outlet renders the matched child route component */}
      <Outlet />
    </Provider>
  );
}

export default App; // Export the App component
