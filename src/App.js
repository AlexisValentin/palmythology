import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import Welcome from "./components/domains/pages/HomePage";
import Filter from "./components/domains/search/Filter";
import { ROUTES } from "./types/routes";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route exact path={ROUTES.ROOT} element={<Welcome />} />
        <Route exact path={ROUTES.RESEARCH} element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
