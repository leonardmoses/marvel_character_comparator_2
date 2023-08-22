import { Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Comparator from "./pages/Comparator";
import Directions from "./pages/Directions";
import Layout from "./components/layouts/Layout";
import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {

  const URL = "https://www.superheroapi.com/api.php/10158052899366078/search/hulk"


  const [charData , setCharData ] = useState('')

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      // console.log(response.data.results)
      setCharData(response.data.results)
      // console.log(response.data.results)
    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route element={<Splash />} path="/" />
      <Route element={<Layout><Comparator charData={charData}/></Layout>} path="/comparator"/>
      <Route element={<Layout><Directions/></Layout>} path="/directions"/>
    </Routes>
  );
}

export default App;
