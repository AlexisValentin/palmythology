import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import Welcome from "./components/domains/pages/Home.page";
import Filter from "./components/domains/search/Filter";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/research" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
