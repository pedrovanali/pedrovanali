import BlankLogo from "../BlankLogo";
import Company from "../Company";
import accenture from "../../assets/accenture.png";
import accolite from "../../assets/accolite.png";
import ap from "../../assets/ap.png";
import exxon from "../../assets/exxon.png";
import realtech from "../../assets/realtech.png";
import TechStack from "../TechStack";
import "./Companies.scss";
import { useMemo } from "react";
import Education from "../Education";
type CompanyData = {
  logo: React.ReactNode;
  companyName: string;
  description: React.ReactNode;
  techStack: string;
};

const Companies = () => {
  const companies: CompanyData[] = useMemo(
    () => [
      {
        logo: accolite,
        companyName: "Accolite - (2022-Current)",
        description: (
          <>
            <p>
              I am allocated at one of the biggest companies of agriculture in
              North America.
            </p>
            <p>
              My role is Full Stack Developer, focused in frontend. developing
              in-house micro frontend web apps using React, Typescript MobX and
              AWS
            </p>
          </>
        ),
        techStack:
          "React, Single SPA, Typescript Micro Frontend, AWS, C#, MobX, HTML, CSS, SASS",
      },
      {
        logo: ap,
        companyName: "Authority Partners (2021-2022)",
        description: (
          <p>
            Was allocated to a financial client developing in-house web apps
            with Angular and C# to monitor IT infrastructure and integrating
            with Azure.
          </p>
        ),
        techStack:
          "C#, Angular, Typescript, Azure, Dapper, OracleDB, HTML, CSS, SASS",
      },
      {
        logo: realtech,
        companyName: "Maklr (Realtech) - (2019 -2021)",
        description: (
          <>
            <p>
              This company was a startup for Real Estate in the Netherlands, I
              was the main developer responsible to build the web app in Angular
              and all the DevOps as well.{" "}
            </p>
            <p>
              Working closely with the designer to create a great UX experience.
              The main stack was a Angular 12 with Firebase, for state
              management we used NgRX, the main point for this project was to
              deeply work with and fully understand RxJS and Observable Pattern.
            </p>
          </>
        ),
        techStack:
          "Angular, Google Cloud, Firebase, Firestore, NgRX, HTML, CSS, SASS",
      },
      {
        logo: exxon,
        companyName: "ExxonMobil (2014 - 2019)",
        description: (
          <>
            <p>
              At ExxonMobil I was working with the global timekeeping team, I
              was lucky that when Exxon was initiating it's Agile Transformation
              I was starting at the company so I had so many opportunities to
              learn and practice it (Scrum/Kanban) what worked best for our team
              what didn't.
            </p>
            <p>
              Also in Exxon I had the opportunity to develop apps in a diverse
              range of stacks, since good old AngularJS to React.js, from ASP to
              .net Core 3.0, from SOAP to REST API fully deployed in Azure, one
              of the highlights in here was we had a third party app that it's
              API was in SOAP with XML and we had to build a UI for an
              timekeeping app using the vendor backbone, so we struggled a
              little bit to understand the documentation and created a
              completely new RESTFul API that did the SOAP communication and all
              the business logic and we sent the frontend app only the required
              data, with swagger and the API fully tested
            </p>
          </>
        ),
        techStack:
          "C#, Angular, Typescript, Azure, React, SQL, Entity Framework, HTML, CSS, SASS",
      },
      {
        logo: accenture,
        companyName: "Accenture Brazil (2013 - 2014)",
        description: (
          <>
            <p>
              I wanted to have a experience of working in a multinational
              company, and accenture provided me that, we worked with one of the
              biggest players in Brazil, I provided services in the Food
              industry and Oil and Gas industry
            </p>
            <p>
              I learned so much in this company in terms of soft skills, take
              ownership of problems and solve them, communicate with different
              people, not only technically but behavioral growth working at this
              company
            </p>
          </>
        ),
        techStack: "SAP, ABAP",
      },
      {
        logo: <BlankLogo content="C" />,
        companyName: "Celler (Alive Pro) (2012-2013)",
        description:
          "This was my first contact with development, it was a startup that created a BMPN (Business Process Modeling Notation) tool, that a user would setup their process in a standalone app developed with C++ (QTCreator), and based on the rules and validations specified in the drawn process (UML) it would generate a whole app in Java with all the business logic and validations and automatically deploy in portlets.",
        techStack: "C++, JAVA, JSF, SOAP, jQuery, HTML, CSS, PostgreSQL",
      },
    ],
    []
  );
  return (
    <>
      {companies.map(({ logo, companyName, description, techStack }, index) => (
        <Company
          key={index}
          logo={logo}
          companyName={companyName}
          description={description}
          techStack={techStack}
        />
      ))}
      <div className="mobile-stack">
        <TechStack />
        <Education />
      </div>
    </>
  );
};

export default Companies;
