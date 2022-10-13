import { FunctionComponent } from "react";
import { wording } from "../wording/fr/main";

const QuestionsAndAnswers: FunctionComponent = () => {
  return (
    <>
      <section>
        <div>
          <h1>{wording.sections.qna_title}</h1>
        </div>
      </section>
    </>
  );
};

export default QuestionsAndAnswers;
