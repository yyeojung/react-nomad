import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/hello" element={
          <h1>hello</h1>
        } ></Route>
        <Route path="/detail/:id" element={<Detail/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
