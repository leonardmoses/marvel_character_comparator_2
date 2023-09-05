import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Comparator from "./pages/Comparator";
import FutureApp from "./pages/FutureApp";
import Layout from "./components/layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

import "./App.scss";
import SingleCharacter from "./pages/SingleCharacter";

function App() {
  //States
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [charData1, setCharData1] = useState([]);
  const [charData2, setCharData2] = useState([]);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  // API Fetch URL
  const baseURL = `https://www.superheroapi.com/api.php/10158052899366078/search/`;

  // API Fetch
  const getData = async () => {
    try {
      const response = await axios.get(url1);
      setCharData1(response.data.results);
    } catch (error) {
      // console.log(error);
      console.log(error.message);
    }
  };

  // API Fetch
  const getData2 = async () => {
    try {
      const response = await axios.get(url2);
      setCharData2(response.data.results);
    } catch (error) {
      // console.log(error);
      console.log(error.message);
    }
  };

  // function to set name when user submits their search form
  function submitName1Input(inputName) {
    setName1(inputName);
  }

  function submitName2Input(inputName) {
    setName2(inputName);
  }

  //use Effect to Fetch the data everytime the name1 updates
  useEffect(() => {
    getData();
    //Disables warning
    // eslint-disable-next-line
  }, [name1]);

    //use Effect to Fetch the data everytime the name1 updates
    useEffect(() => {
      getData2();
      //Disables warning
      // eslint-disable-next-line
    }, [name2]);

  console.log(charData1)

  return (
    <Routes>
      <Route element={<Splash />} path="/" />
      <Route
        element={
          <Layout>
            <Comparator
              charData1={charData1}
              charData2={charData2}
              setCharData1={setCharData1}
              setCharData2={setCharData2}
              submitName1Input={submitName1Input}
              submitName2Input={submitName2Input}
              baseURL={baseURL}
              setUrl1={setUrl1}
              setUrl2={setUrl2}
            />
          </Layout>
        }
        path="/comparator"
      />

      <Route
        element={
          <Layout>
            <SingleCharacter
              charData1={charData1}
              setCharData1={setCharData1}
              submitName1Input={submitName1Input}
              baseURL={baseURL}
              setUrl1={setUrl1}
            />
          </Layout>
        }
        path="/singlecharacter"
      />

      <Route
        element={
          <Layout>
            <FutureApp />
          </Layout>
        }
        path="/futureapp"
      />
    </Routes>
  );
}

export default App;
