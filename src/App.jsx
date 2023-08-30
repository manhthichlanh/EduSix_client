import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

//||Components
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
//||Components
function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
