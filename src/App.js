import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { useState } from "react";
import Overview from "./Overview";
import { Button } from "@material-ui/core";

const App = () => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("user") && setUserLogged(true);
  }, []);

  return userLogged ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
