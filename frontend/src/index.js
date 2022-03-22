
  // frontend/src/index.js
  
  import React from 'react';
  import ReactDOM from 'react-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';       // add this
  import './index.css';
  import App from './App';
  import * as serviceWorker from './serviceWorker';

  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import {
    Calendar,
    Footer,
    Habits,
    Home,
    Navigation,
    Profile,
    Tasks,
  } from "./components";
  
  ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </Router>,
  
    document.getElementById("root")
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();