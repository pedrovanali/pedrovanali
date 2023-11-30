import { useRef } from "react";
import {
  Parallax,
  ParallaxLayer,
  IParallax,
  IParallaxLayer,
} from "@react-spring/parallax";

import "./App.scss";
import Profile from "./components/Profile";
import useParallaxScroll from "./hooks/useParallaxScroll";
import Menu from "./components/Menu";

import TechStack from "./components/TechStack";
import Companies from "./components/Companies";
import AWSBadge from "./components/AWSBadge";
import College from "./components/College";
import TechCourse from "./components/TechCourse";

function App() {
  const parallax = useRef<IParallax>(null!);
  const parallaxLayer = useRef<IParallaxLayer>(null!);
  const { handleScroll, scrollPosition, scrollTo } =
    useParallaxScroll(parallax);

  return (
    <div className="container">
      <Parallax ref={parallax} pages={4} onScrollCapture={handleScroll}>
        <ParallaxLayer
          sticky={{ start: 0, end: 5 }}
          speed={0.5}
          factor={0.5}
          style={{ zIndex: 10 }}
        >
          <Menu scrollPosition={scrollPosition} scrollTo={scrollTo} />
          <Profile scrollPosition={scrollPosition} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          factor={1}
          sticky={{ start: 0.8, end: 1 }}
          speed={2}
          style={{ zIndex: -1 }}
        >
          <AWSBadge />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          factor={1}
          sticky={{ start: 1.4, end: 2 }}
          speed={2.5}
          style={{ zIndex: -1 }}
        >
          <College />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.7}
          factor={1}
          sticky={{ start: 1.7, end: 2.4 }}
          speed={2.8}
          style={{ zIndex: -1 }}
        >
          <TechCourse />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.15}
          factor={0.15}
          speed={0.75}
          ref={parallaxLayer}
        >
          <Companies />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 5 }}
          offset={0.55}
          factor={0.15}
          speed={2}
          className="stack-container"
        >
          <TechStack />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
