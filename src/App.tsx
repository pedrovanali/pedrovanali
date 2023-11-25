import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import accolite from "./assets/accolite.jpg";
import ap from "./assets/ap.jpeg";

import "./App.scss";
import Profile from "./components/Profile";
import useParallaxScroll from "./hooks/useParallaxScroll";
import Menu from "./components/Menu";
import Company from "./components/Company";

function App() {
  const parallax = useRef<IParallax>(null!);
  const { handleScroll, scrollPosition } = useParallaxScroll(parallax);
  return (
    <div className="container">
      <Parallax ref={parallax} pages={5} onScrollCapture={handleScroll}>
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          speed={0.5}
          factor={0.5}
          style={{ margin: "10px" }}
        >
          <Menu scrollPosition={scrollPosition} />
          <Profile scrollPosition={scrollPosition} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} factor={0.15} speed={0.75}>
          <Company
            logo={accolite}
            alt="Accolite"
            description="Company I worked"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} factor={0.15} speed={2}>
          <Company
            logo={ap}
            alt="Authority Partners"
            description="Company I worked"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
