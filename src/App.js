
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




export default function App() {
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  const [countryName, setCountryName] = useState("in")

  const setprogress = (progress) => {
    setProgress(progress)
  }
  const changeCountry = (cname) => {
    setCountryName(cname)
    console.log("country changed")
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar setCountryName={changeCountry} country={countryName} />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />

          <Routes>
            <Route exect path="/" element={<News setprogress={setprogress} page={12} key="general" apikey={apikey} category="general" country={countryName} />}  ></Route>
            <Route exect path="/business" element={<News setprogress={setprogress} page={12} key="business" apikey={apikey} category="business" country={countryName} />}  ></Route>
            <Route exect path="/entertainment" element={<News setprogress={setprogress} page={12} key="entertainment" apikey={apikey} category="entertainment" country={countryName} />}  ></Route>
            <Route exect path="/health" element={<News setprogress={setprogress} page={12} key="health" apikey={apikey} category="health" country={countryName} />}  ></Route>
            <Route exect path="/science" element={<News setprogress={setprogress} page={12} key="science" apikey={apikey} category="science" country={countryName} />}  ></Route>
            <Route exect path="/sports" element={<News setprogress={setprogress} page={12} key="sports" apikey={apikey} category="sports" country={countryName} />}  ></Route>
            <Route exect path="/technology" element={<News setprogress={setprogress} page={12} key="technology" apikey={apikey} category="technology" country={countryName} />}  ></Route>
          </Routes>

        </div>

      </BrowserRouter>
    </>
  )
}


