import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";

function App() {
  // const [catFactsList, setCatFactsList] = useState([]);
  const [catFact, setCatFact] = useState("");

  const getCatFact = async () => {
    const { data } = await axios("https://catfact.ninja/fact");

    setCatFact(data.fact);
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRoutes catFact={catFact} />
    </div>
  );
}

export default App;
