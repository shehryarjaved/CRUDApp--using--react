
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./Component/UI/Create";
import Edit from "./Component/UI/Edit";
import Home from "./Component/UI/Home";



function App() {
  return (

    <div className="App">
      <h1 className="geeks">Code BY shehryar </h1>
      <h3>CRUD App</h3>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="/edit"
            element={<Edit />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
