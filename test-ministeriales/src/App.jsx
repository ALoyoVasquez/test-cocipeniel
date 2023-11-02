import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Dones from "./components/test/dones";
import NavBar from "./components/NavBar/NavBar";
import FormTestDones from "./components/test/FormTestDones";
// import TestComponent from "./components/test/TestComponent";
// import GraphDones from "./components/test/graphDones";
// import MixedChart from "./components/test/MixedChart";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      {/* <NavBar />
      <Dones /> */}

      <div className="App" bgcolor="#F70707">
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Dones />} /> */}
          {/* <Route path="/test" element={<Dones />} /> */}
          <Route path="/test2" element={<FormTestDones />} />
         
          {/* <Route path="/test3" element={<TestComponent />} /> */}
          
          {/* <Route path="/graph2" element={<GraphDones
          a={5}
          b={4}
          c={3} />} /> */}
          {/* <Route path="/about" element={<About />} />
        <Route path="/detail/:idCountry" element={<Detail />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/error" element={<ErrorView />} />
        <Route path="*" element={<Navigate to="/error" replace />} /> */}
        </Routes>
        <FormTestDones />
        {/* <MixedChart/> */}
      </div>
    </>
  );
}

export default App;
