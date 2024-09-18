import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
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

      <main className="home-main d-flex">
        <section className="main-section1 bg-transparent w-50 p-5 ">
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
            <Link to="/login">
              <button className="ms-5 btn border border-2 rounded-5 p-3 login-btn">
                <span className="bi bi-link-45deg me-3 "></span>Get Started
              </button>
            </Link>

            <Link to="/register">
              <button className="ms-5 btn border border-2 rounded-5 p-3 register-btn">
                {" "}
                <span className="bi bi-person-fill-gear me-3 "></span>Create an
                Account
              </button>
            </Link>
          </div>
        </section>

        <section className="main-section2 w-50  ">
          <div className="home-section-img">
            
          </div>
          {/* <img src={homeImg} alt="" /> */}
        </section>

      </main>
    </div>
  );
}
