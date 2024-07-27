import "./index.css";

//importing relevant modules
import { useLenis, ReactLenis } from "lenis/react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  //creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  //creating reference to logo using useRef
  let logo = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const logoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "bottom",
        scrub: true,
        markers: true,
      },
    });

    logoTimeline
      .from(logo.current, { transform: `rotateX(0deg)` })
      .to(logo.current, { transform: `rotateX(600deg)` }, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="App">
        <header>
          <div className="logo" ref={logo}>
            <svg
              viewBox="0 0 642 642"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="321"
                cy="321"
                r="318.5"
                // stroke="black"
                // stroke-width="5"
                id="circle"
              />
              <text>
                <textPath fontSize="1025px" fill="black" href="#circle">
                  hello
                </textPath>
              </text>
            </svg>
          </div>
        </header>
      </div>
    </ReactLenis>
  );
}

export default App;
