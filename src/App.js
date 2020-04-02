import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabletop from "tabletop";

import SupplierList from "./components/SupplierList";

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1nVWGi-4mlCqQeCJ6S2yCRrOqWbSYgAW0fkkfcSx5z8U/pubhtml";

const App = () => {
  const [suppliers, setSuppliers] = useState(null);

  useEffect(() => {
    Tabletop.init({
      key: sheetUrl,
      simpleSheet: true
    })
      .then(suppliers => setSuppliers(suppliers.filter(({ Name }) => !!Name)))
      .catch(err => console.error("Error loading suppliers", err));
  }, []);

  return (
    <div>
      <Header />
      <SupplierList suppliers={suppliers} />
    </div>
  );
};

export default App;
