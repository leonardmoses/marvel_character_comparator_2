import { Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Comparator from "./pages/Comparator";
import Directions from "./pages/Directions";
import Layout from "./components/layouts/Layout";


function App() {
  return (
    <Routes>
      <Route element={<Splash />} path="/" />
      <Route element={<Layout><Comparator /></Layout>} path="/comparator"/>
      <Route element={<Layout><Directions/></Layout>} path="/directions"/>
    </Routes>
  );
}

export default App;
