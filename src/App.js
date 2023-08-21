import { Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Comparator from "./pages/Comparator";
import Directions from "./pages/Directions";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Comparator />} path="/" />
        <Route element={<Directions />} path='/directions'/>
      </Routes>
    </Layout>
  );
}

export default App;
