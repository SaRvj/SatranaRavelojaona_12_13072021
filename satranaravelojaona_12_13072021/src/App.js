import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FetchProvider } from "./Utils/Switch/fetchSwitch"

import Dashboard from "./Pages/Dashboard/Dashboard"
import HomePage from "./Pages/HomePage/HomePage"
import Error from "./Pages/Error/Error"

function App() {
  return (
    <div className="App">
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />}></Route>
            <Route path="/dashboard/:idURL" element={<Dashboard />}></Route>
            <Route path="/error" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>
    </div>
  )
}

export default App
