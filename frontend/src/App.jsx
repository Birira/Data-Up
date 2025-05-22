import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navi } from './Components/Navi';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navi/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
