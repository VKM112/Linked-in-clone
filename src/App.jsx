import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
