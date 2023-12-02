import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useCallback, useState } from "react";

import "./App.scss";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import useParallaxScroll from "./hooks/useParallaxScroll";

import AWSBadge from "./components/AWSBadge";
import College from "./components/College";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import TechCourse from "./components/TechCourse";
import TechStack from "./components/TechStack";
import { useAdaptiveTriggers } from "./hooks/useAdapatitiveTriggers";

function App() {
  const [parallax, setParallax] = useState<IParallax>(null!);
  const width = useAdaptiveTriggers({});

  const { handleScroll, scrollPosition, scrollTo } =
    useParallaxScroll(parallax);

  const parallaxRef: any = useCallback(
    (node: IParallax) => {
      setParallax(node);
    },
    [setParallax]
  );

  return (
    <div className="container">
      <Parallax ref={parallaxRef} pages={4} onScrollCapture={handleScroll}>
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          speed={0.5}
          factor={0.1}
          style={{ zIndex: 10, maxHeight: "50px" }}
        >
          <Menu scrollPosition={scrollPosition} scrollTo={scrollTo} />
          <Profile scrollPosition={scrollPosition} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={1}
          sticky={{ start: 1, end: 3 }}
          speed={3}
          style={{ zIndex: 1 }}
          className="hide-container"
        >
          <h1 className="education-header">Education</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          factor={1}
          sticky={{ start: 1.2, end: 2 }}
          speed={2}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <College />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          factor={1}
          sticky={{ start: 1.5, end: 2 }}
          speed={3}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <TechCourse />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.4}
          factor={1}
          sticky={{ start: 2.4, end: 3 }}
          speed={2.8}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <AWSBadge />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.15}
          factor={0.15}
          speed={0.75}
          style={{ zIndex: -1 }}
        >
          <Companies />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 3.5 }}
          offset={0.55}
          factor={0.15}
          speed={2}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <TechStack />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          factor={1}
          sticky={{ start: 1.5, end: 3.5 }}
          speed={2.8}
          style={{ zIndex: 9, marginTop: "5rem" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
