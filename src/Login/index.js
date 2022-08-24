import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { authorise } from "./util";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (authorise(login, password)) {
      localStorage.setItem("user", "jarjar sith");
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/87/fb/d9/87fbd988b1779ba73d6e3ec4287cd5ef.jpg"
          alt="Jar Jar Sith"
          style={{ width: "240px", margin: "auto" }}
        />
        <div style={{ width: "240px", margin: "12px" }}>
          <TextField
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            label="login"
            fullWidth
          />
        </div>
        <div style={{ width: "240px", margin: "12px" }}>
          <TextField
            type="password"
            label="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </div>
        <Button onClick={handleLogin}>Login</Button>
        {error && <p style={{ color: "red" }}>Not this time!</p>}
      </div>
    </div>
  );
};

export default Login;
