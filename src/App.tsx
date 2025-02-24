import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import LineCallback from "./line-callback"
import LineLogin from "./line-login"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/line" element={<LineCallback />} />
        <Route path="/login" element={<LineLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
