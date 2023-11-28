import "./TechStack.scss";
import { useSpring, animated } from "@react-spring/web";
import react from "../../assets/react.webp";
import typescript from "../../assets/ts.png";
import reactSpring from "../../assets/react-spring.png";
import sass from "../../assets/sass.png";
import reactTestingLibrary from "../../assets/react-testing.png";
import git from "../../assets/git.png";

const TechStack = () => {
  const props = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    loop: true,
    config: { duration: 4000 },
  });
  return (
    <div className="stack">
      <h1>This website was built using the following stack:</h1>
      <ul>
        <li>
          <animated.img
            className="stack-logo"
            src={react}
            alt="React Logo"
            style={{
              transform: props.x
                .to([0, 1], [0, 360])
                .to((value) => `rotateZ(${value}deg)`),
            }}
          />
          React
        </li>
        <li>
          <img src={typescript} alt="Typescript Logo" />
          Typescript
        </li>
        <li>
          <img src={reactSpring} alt="React Sprint Animation Logo" />
          React Spring Animation
        </li>
        <li>
          <img src={sass} alt="Sass Logo" />
          SASS
        </li>
        <li>
          <img src={reactTestingLibrary} alt="React Testing Library Logo" />
          React Testing Library
        </li>
        <li>
          <img src={git} alt="Git Logo" />
          Git
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
