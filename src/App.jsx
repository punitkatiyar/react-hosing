import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import PageOne from "./components/PageOne"
import Profile from "./components/Profile"
import Welcome from "./components/Welcome"
function App() {
  return (
    <>
      <Header />
      <div className="mid">
        <Welcome data="Ducat India" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<PageOne />}>
            <Route path="html1" element={<h1>HTML One</h1>} />
            <Route path="html2" element={<h1>HTML Two</h1>} />
            <Route path="html3" element={<h1>HTML Three</h1>} />
          </Route>
          <Route path="/page2" element={<h1>Page Two</h1>} />
          <Route path="/page3" element={<h1>Page Three</h1>} />
          <Route path="/page4" element={<h1>Page Four</h1>} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>

    </>


  )
}

export default App
