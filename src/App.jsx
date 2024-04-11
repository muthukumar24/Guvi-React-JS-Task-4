import { Routes, Route, Link } from "react-router-dom";
import All from "./Components/All"
import CyberSecurity from "./Components/CyberSecurity"
import Career from "./Components/Career"
import FullStack from "./Components/FullStackDevelopment"
import DataScience from "./Components/DataScience"

function App() {

    return (
    <div>
      <nav>
        <div className="container d-flex justify-content-evenly mt-4">
          <Link to={"/"} className="link">All</Link>
          <Link to={"/fullstack"} className="link">Full Stack Development</Link>
          <Link to={"/datascience"} className="link">Data Science</Link>
          <Link to={"/cybersecurity"} className="link">Cyber Security</Link>
          <Link to={"/career"} className="link">Career</Link>
        </div>
      </nav>
        <div className="container mt-4 mb-4">
          <Routes>
            <Route Component={All} path="/" />
            <Route Component={FullStack} path="/fullstack" />
            <Route Component={DataScience} path="/datascience" />
            <Route Component={CyberSecurity} path="/cybersecurity" />
            <Route Component={Career} path="career" />
          </Routes>
        </div>
    </div>
  )
}

export default App
