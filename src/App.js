
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
    countryName: "in"

  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  setCountryName = (cname) => {
    this.setState({ countryName: cname })
    console.log(this.state)
    console.log("country changed")
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <NavBar setCountryName={this.setCountryName} country={this.state.countryName} />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />

            <Routes>
              <Route exect path="/" element={<News setprogress={this.setprogress} page={12} key="general" apikey={this.apikey} category="general" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/business" element={<News setprogress={this.setprogress} page={12} key="business" apikey={this.apikey} category="business" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/entertainment" element={<News setprogress={this.setprogress} page={12} key="entertainment" apikey={this.apikey} category="entertainment" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/health" element={<News setprogress={this.setprogress} page={12} key="health" apikey={this.apikey} category="health" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/science" element={<News setprogress={this.setprogress} page={12} key="science" apikey={this.apikey} category="science" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/sports" element={<News setprogress={this.setprogress} page={12} key="sports" apikey={this.apikey} category="sports" country={this.state.countryName} countryName="INDIA" />}  ></Route>
              <Route exect path="/technology" element={<News setprogress={this.setprogress} page={12} key="technology" apikey={this.apikey} category="technology" country={this.state.countryName} countryName="INDIA" />}  ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

