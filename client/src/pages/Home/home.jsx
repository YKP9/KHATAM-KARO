import { useEffect, useRef } from "react";
import logo from "../../assets/KhatamKaroLogo.jpeg";
import Typed from "typed.js";

export function Home() {
  const autoType = useRef(null);

  useEffect(() => {
    const typed = new Typed(autoType.current, {
      strings: ["YOUR DAILY TASK..."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <header>
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
              <ul className=" navbar-nav    d-flex align-items-center gap-5 list-unstyled me-5 ">
                <li className="nav-item">
                  <a href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                  <button className="btn border border-1 border-dark rounded-5 p-2 px-4 btn1">
                    REGISTER
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn border border-1 border-dark rounded-5 p-2 px-4 btn2">
                    LOGIN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="home-main d-flex">
        <section className="main-section1 w-50 p-5 ">
          <div className="h1  mb-5 text-center header-2">
            SCHEDULE{" "}
            <span ref={autoType} className="auto-type">
              YOUR DAILY TASK
            </span>
          </div>
          <div className="h2 fs-1  mb-5 text-center">
            " HARD WORK BEATS TALENT{" "}
            <span className="">WHEN TALENT DOESN'T WORK HARD ".</span>
          </div>
          <div className="w-100 text-center  p-3 fs-5">
            The most effective way to get things done is{" "}
            <span className="fw-bold">focusing</span> on single tasks, that's
            why time blocking works. When you pair this with putting category on
            what you want to focus and place your task inside, you will be able
            to further improve your efficiency and productivity. Separate your
            day in singular categories and tackle them at a set time frame{" "}
            <span className="fw-bold">completely for free.</span>
          </div>

          <div className="w-100 text-center header-2">
            Your daily companion when you want to get sh*t done.
          </div>

          <div className="mt-2 text-center ">
            <button className="ms-5 btn border border-2 rounded-5 p-3 login-btn">
              <span className="bi bi-link-45deg me-3 "></span>Get Started
            </button>
            <button className="ms-5 btn border border-2 rounded-5 p-3 register-btn">
              {" "}
              <span className="bi bi-person-fill-gear me-3 "></span>Create an
              Account
            </button>
          </div>
        </section>
        <section className="main-section2 w-50  ">
          <div className="home-section-img"></div>
          {/* <img src={homeImg} alt="" /> */}
        </section>
      </main>
    </div>
  );
}
