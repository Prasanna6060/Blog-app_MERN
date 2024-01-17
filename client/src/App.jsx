import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="bg-slate-700 text-xl text-white m-5 p-5 rounded-3xl text-center">
          Welcome to react
        </h1>
        <Routes>
          <Route path='/' element= {< Home />}/>
          <Route path='/dashboard' element= {< Dashboard />}/>
          <Route path='/about' element= {< About />}/>
          <Route path='/projects' element= {< Projects />}/>
          <Route path='sign-in' element= {< SignIn />}/>
          <Route path='sign-up' element= {< Signup />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
