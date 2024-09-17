import "./App.css";
import logo from "./assets/KhatamKaroLogo.jpeg";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { AboutApp } from "./pages/About/about";

function App() {
  return (
    <div>
       


      <BrowserRouter>
      <header className="position-sticky top-0 z-1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-2 ">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <div>
                <img
                  src={logo}
                  style={{ width: "75px", height: "75px" }}
                  alt="Brand-Logo"
                />
              </div>
              <div>KHATAM KARO</div>
            </div>
            <div>
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className=" collapse navbar-collapse ms-5 "
              id="navbarSupportedContent"
            >
              <ul className=" navbar-nav d-flex align-items-center gap-5 list-unstyled me-5 ">
                <li className="nav-item pt-1">
                  <Link to="/">HOME</Link>
                </li>

                <li className="nav-item pt-1">
                  <Link to="/about">ABOUT</Link>
                </li>

                  <Link to="/register">
                <li className="nav-item">
                    <button className="btn border border-1 border-dark rounded-5 p-2 px-4 btn1">
                      REGISTER
                    </button>
                </li>
                  </Link>
                <Link to="/login">
                  <li className="nav-item">
                    <button className="btn border border-1 border-dark rounded-5 p-2 px-4 btn2">
                      LOGIN
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        <div className="container-fluid">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
