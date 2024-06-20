import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Home></Home>

      <Routes>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
