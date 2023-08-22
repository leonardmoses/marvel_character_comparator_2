import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Directions from "./Directions";

const Home = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Directions />} path="/directions"/>
      </Routes>
      <h1>Comparator</h1>
    </Layout>
  );
};

export default Home;
