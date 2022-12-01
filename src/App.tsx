import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AddTodo from "./routes/AddTodo";
import UpdateTodo from "./routes/UpdateTodo";
import Redirect from "./routes/Redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
