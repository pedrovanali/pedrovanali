import { useMemo, useRef } from "react";
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

function App() {
  const parallax = useRef<IParallax>(null!);
  const parallaxLayer = useRef<IParallaxLayer>(null!);
  const { handleScroll, scrollPosition } = useParallaxScroll(parallax);

  const scrollTo = useMemo(
    () => parallax?.current?.scrollTo ?? ((offset: number) => {}),
    [parallax]
  );

  return (
    <div className="container">
      <Parallax ref={parallax} pages={3} onScrollCapture={handleScroll}>
        <ParallaxLayer sticky={{ start: 0, end: 4 }} speed={0.5} factor={0.5}>
          <Menu scrollPosition={scrollPosition} scrollTo={scrollTo} />
          <Profile scrollPosition={scrollPosition} />
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
          sticky={{ start: 0.5, end: 2 }}
          offset={0.55}
          factor={0.15}
          speed={2}
          className="stack-container"
        >
          <TechStack />
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} factor={0.15} speed={2.5}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
