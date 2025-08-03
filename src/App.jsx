import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <>
              <Home />
              <Header/>
            </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
