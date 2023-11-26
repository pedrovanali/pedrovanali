import { useEffect, useRef } from "react";
import {
  Parallax,
  ParallaxLayer,
  IParallax,
  IParallaxLayer,
} from "@react-spring/parallax";
import accolite from "./assets/accolite.jpg";
import ap from "./assets/ap.jpeg";
import exxon from "./assets/exxon.png";
import realtech from "./assets/realtech.jpeg";
import accenture from "./assets/accenture.jpg";

import "./App.scss";
import Profile from "./components/Profile";
import useParallaxScroll from "./hooks/useParallaxScroll";
import Menu from "./components/Menu";
import Company from "./components/Company";
import BlankLogo from "./components/BlankLogo/BlankLogo";

function App() {
  const parallax = useRef<IParallax>(null!);
  const parallaxLayer = useRef<IParallaxLayer>(null!);
  const { handleScroll, scrollPosition } = useParallaxScroll(parallax);
  return (
    <div className="container">
      <Parallax ref={parallax} pages={3} onScrollCapture={handleScroll}>
        <ParallaxLayer sticky={{ start: 0 }} speed={0.5} factor={0.5}>
          <Menu scrollPosition={scrollPosition} />
          <Profile scrollPosition={scrollPosition} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.15}
          factor={0.15}
          speed={0.75}
          ref={parallaxLayer}
        >
          <Company
            logo={accolite}
            companyName="Accolite - (2022-Current)"
            description={`I am allocated at one of the biggest companies of agriculture in North America, developing in-house micro frontend web apps using React, Typescript MobX and AWS`}
            techStack={
              "React, Single SPA, Typescript Micro Frontend, AWS, C#, MobX, HTML, CSS, SASS"
            }
          />
          <Company
            logo={ap}
            companyName="Authority Partners (2021-2022)"
            description={``}
            techStack={
              "C#, Angular, Typescript, Azure, Dapper, OracleDB, HTML, CSS, SASS"
            }
          />
          <Company
            logo={realtech}
            companyName="Maklr (Realtech) - (2019 -2021)"
            description="Company I worked"
            techStack={
              "Angular, Google Cloud, Firebase, Firestore, NgRX, HTML, CSS, SASS"
            }
          />
          <Company
            logo={exxon}
            companyName="ExxonMobil (2014 - 2019)"
            description="Company I worked"
            techStack={
              "C#, Angular, Typescript, Azure, React, SQL, Entity Framework, HTML, CSS, SASS"
            }
          />
          <Company
            logo={accenture}
            companyName="Accenture Brazil (2013 - 2014)"
            description="I wanted to have a experience of working in a multinational company, and accenture provided me that, we worked with one of the biggest players in Brazil, I provided services in the Food industry and Oil and Gas industry. I learned so much in this company in terms of soft skills, take ownership of problems and solve them, communicate with different people, not only technically but behavioral growth working at this company."
            techStack={"SAP"}
          />
          <Company
            logo={<BlankLogo content="C" />}
            companyName="Celler (Alive Pro) (2012-2013)"
            description="This was my first contact with development, it was a startup that created a BMPN (Business Process Modeling Notation) tool, that a user would setup their process in a standalone app developed with C++ (QTCreator), and based on the rules and validations specified in the drawn process (UML) it would generate a whole app in Java with all the business logic and validations and automatically deploy in portlets."
            techStack={"C++, JAVA, JSF, SOAP, jQuery, HTML, CSS, PostgreSQL"}
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 2 }}
          offset={0.55}
          factor={0.15}
          speed={2}
        >
          Tech stack used
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} factor={0.15} speed={2.5}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
