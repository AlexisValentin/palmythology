import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainMenu from "./components/domains/navigation/MainMenu";
import AboutPage from "./components/domains/pages/AboutPage";
import HomePage from "./components/domains/pages/HomePage";
import NewsPage from "./components/domains/pages/NewsPage";
import SearchPage from "./components/domains/pages/SearchPage";
import { ROUTE_URL } from "./types/routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ml-32 mr-32">
        <MainMenu />
        <Routes>
          <Route exact path={ROUTE_URL.HOME} element={<HomePage />} />
          <Route exact path={ROUTE_URL.NEWS} element={<NewsPage />} />
          <Route exact path={ROUTE_URL.RESEARCH} element={<SearchPage />} />
          <Route exact path={ROUTE_URL.ABOUT} element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
