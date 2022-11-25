import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import HomePage from "./components/domains/pages/HomePage";
import SearchPage from "./components/domains/pages/SearchPage";
import { ROUTE_URL } from "./types/routes";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <div className="ml-20 mr-20">
        <Routes>
          <Route exact path={ROUTE_URL.HOME} element={<HomePage />} />
          <Route exact path={ROUTE_URL.RESEARCH} element={<SearchPage />} />
          <Route exact path={ROUTE_URL.ABOUT} element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
