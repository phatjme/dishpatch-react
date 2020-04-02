import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabletop from "tabletop";

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1nVWGi-4mlCqQeCJ6S2yCRrOqWbSYgAW0fkkfcSx5z8U/pubhtml";

const App = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: sheetUrl,
      simpleSheet: true
    })
      .then(setSuppliers)
      .catch(err => console.error("Error loading suppliers", err));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
