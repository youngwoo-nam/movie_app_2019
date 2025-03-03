import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){

  return <Router> 

    <Navigation />
    <Routes>
     { <Route path="/" element={<Home />} > </Route> }
     { <Route path="/about" element={<About />}></Route> }
     { <Route path="/movie/:id" element={<Detail />}></Route> }
  </Routes>
</Router>;


//    <Route path="/movie/:id" element={<About />}></Route>
// { <Route path={process.env.PUBLIC_URL+"/"} element={<Home />} > </Route> }
// { <Route path={process.env.PUBLIC_URL+"/about"} element={<About />}></Route> }
// <Route path={"/"} element={<Home />} > </Route>
// <Route path={"/about"} element={<About />}></Route>
}
export default App;