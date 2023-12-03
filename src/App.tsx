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
import { useAdaptiveTriggers } from "./hooks/useAdaptiveTriggers";
import { ParallaxConfig } from "./configs";

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

  const parallaxScreenConfig = ParallaxConfig[width];

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
          {...parallaxScreenConfig.education}
          style={{ zIndex: 1 }}
          className="hide-container"
        >
          <h1 className="education-header">Education</h1>
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.college}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <College />
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.techCourse}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <TechCourse />
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.awsBadge}
          className="hide-container"
        >
          <AWSBadge />
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.companies}
          style={{ zIndex: -1 }}
        >
          <Companies />
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.techStack}
          style={{ zIndex: -1 }}
          className="hide-container"
        >
          <TechStack />
        </ParallaxLayer>
        <ParallaxLayer
          {...parallaxScreenConfig.contact}
          style={{ zIndex: 9, marginTop: "5rem" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
