import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

/* Components */
import About from "./components/About";
import CardInfo from "./components/cards/CardInfo";
import Filter from "./components/Filter";
import MainMenu from "./components/MainMenu";
import QuestionsAndAnswers from "./components/Q&A";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/research" element={<Filter />} />
        <Route path="/details" element={<CardInfo />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/qna" element={<QuestionsAndAnswers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
