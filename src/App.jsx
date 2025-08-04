import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import { getUserauth } from "./actions/Index";
import { connect } from 'react-redux'

import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

const App = (props) => {
  useEffect(()=>{
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <>
              <Header/>
              <Home />
            </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: ()=> dispatch(getUserauth()),
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
