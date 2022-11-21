import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import Welcome from "./components/domains/pages/HomePage";
import Filter from "./components/domains/search/Filter";
import { ROUTE_URL } from "./types/routes";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route exact path={ROUTE_URL.HOME} element={<Welcome />} />
        <Route exact path={ROUTE_URL.RESEARCH} element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
