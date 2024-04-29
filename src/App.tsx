
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import styles from "./App.module.scss"

import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header'

import { Provider } from "react-redux";

import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={styles.App}>
          <Header/>

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

          
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
