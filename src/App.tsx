import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import "./App.scss";
import Profile from "./components/Profile";
import useParallaxScroll from "./hooks/useParallaxScroll";
import Menu from "./components/Menu";

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
          <Profile scrollPosition={scrollPosition} />
          <Menu />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
