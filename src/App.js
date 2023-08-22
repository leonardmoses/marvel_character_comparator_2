import { Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Splash />} path="/splash" />
      <Route element={<Home />} path="*" exact={true}/>
    </Routes>
  );
}

export default App;
