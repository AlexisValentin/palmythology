import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

/* Types */
import { ROUTES } from "../types/routes";

/* Wording */
import { wording } from "../wording/fr/main";

const About: FunctionComponent = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-red-500 w-full h-full">
        <div className="grid justify-items-center">
          {wording.sections.qna_text}
          <Link to={ROUTES.QNA}>{wording.sections.qna_title}</Link>
        </div>
      </section>
    </>
  );
};

export default About;
