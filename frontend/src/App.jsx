import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navi } from './Components/Navi';
import { Home } from "./Components/Home";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
