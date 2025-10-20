import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path = "*" element={<NotFound />} />
      </Routes>
    </BrowserRouter></>
  )
}

export default App
