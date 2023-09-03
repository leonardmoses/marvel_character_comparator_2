import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Comparator from "./pages/Comparator";
import FutureApp from "./pages/FutureApp";
import Layout from "./components/layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

import './App.scss';


function App() {
  //States
  const [name1 , setName1] = useState('')
  const [charData, setCharData] = useState([]);
  const [url , setUrl] = useState('');

  // API Fetch URL
  const baseURL = `https://www.superheroapi.com/api.php/10158052899366078/search/`;

  // API Fetch
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setCharData(response.data.results);
    } catch (error) {
      // console.log(error);
      console.log(error.message)
    }
  };

  // function to set name when user submits their search form
  function submitName1Input(inputName) {
    setName1(inputName)
  }


  //use Effect to Fetch the data everytime the name1 updates
  useEffect(() => {
    getData();
    //Disables warning
    // eslint-disable-next-line
  }, [name1]);

  // console.log(charData)

  return (
    <Routes>
      <Route element={<Splash />} path="/" />
      <Route
        element={
          <Layout>
            <Comparator
            charData={charData}
            setCharData={setCharData}
            submitName1Input={submitName1Input}
            baseURL={baseURL}
            setUrl={setUrl}
            />
          </Layout>
        }
        path="/comparator"
      />

      <Route
        element={
          <Layout>
            <FutureApp/>
          </Layout>
        }
        path="/futureapp"
      />
    </Routes>
  );
}

export default App;
