import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import Welcome from "./components/domains/pages/HomePage";
import Filter from "./components/domains/search/Filter";
import { ROUTE_URL } from "./types/routes";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <div className="ml-20 mr-20">
        <Routes>
          <Route exact path={ROUTE_URL.HOME} element={<Welcome />} />
          <Route exact path={ROUTE_URL.RESEARCH} element={<Filter />} />
          <Route exact path={ROUTE_URL.ABOUT} element={<Welcome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
