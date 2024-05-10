import { Routes, Route, Link } from "react-router-dom";
import All from "./Components/All"; // Importing the component for displaying all content
import CyberSecurity from "./Components/CyberSecurity"; // Importing the component for displaying Cyber Security content
import Career from "./Components/Career"; // Importing the component for displaying Career content
import FullStack from "./Components/FullStackDevelopment"; // Importing the component for displaying Full Stack Development content
import DataScience from "./Components/DataScience"; // Importing the component for displaying Data Science content

function App() {

    return (
    <>
      {/* Navigation bar */}
      <nav>
        <div className="container d-flex justify-content-evenly mt-4">
          {/* Link to display all content */}
          <Link to={"/"} className="link">All</Link>
          {/* Link to display Full Stack Development content */}
          <Link to={"/fullstack"} className="link">Full Stack Development</Link>
          {/* Link to display Data Science content */}
          <Link to={"/datascience"} className="link">Data Science</Link>
          {/* Link to display Cyber Security content */}
          <Link to={"/cybersecurity"} className="link">Cyber Security</Link>
          {/* Link to display Career content */}
          <Link to={"/career"} className="link">Career</Link>
        </div>
      </nav>
        {/* Container for displaying content */}
        <div className="container mt-4 mb-4">
          <Routes>
            {/* Route to display all content */}
            <Route Component={All} path="/" />
            {/* Route to display Full Stack Development content */}
            <Route Component={FullStack} path="/fullstack" />
            {/* Route to display Data Science content */}
            <Route Component={DataScience} path="/datascience" />
            {/* Route to display Cyber Security content */}
            <Route Component={CyberSecurity} path="/cybersecurity" />
            {/* Route to display Career content */}
            <Route Component={Career} path="/career" />
          </Routes>
        </div>
    </>
  )
}

export default App;
