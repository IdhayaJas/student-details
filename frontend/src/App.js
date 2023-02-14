import './App.css';
import Add from "./pages/Add";
 import Edit from "./pages/Edit";
 import Display from "./pages/Display";
 import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route exact path="/add" element={<Add/>}/>
         <Route exact path="/edit/:id" element={<Edit/>}/>
         <Route exact path="/" element={<Display/>}/>
         </Routes>>
     </BrowserRouter> 
     {/* <Add/> */}
     {/* <Display/> */}
    </div>
  );
}

export default App;
