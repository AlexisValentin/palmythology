import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/domains/footer/Footer";
import MainMenu from "./components/domains/navigation/MainMenu";
import AboutPage from "./components/domains/pages/AboutPage";
import FoldersPage from "./components/domains/pages/FoldersPage";
import HomePage from "./components/domains/pages/HomePage";
import NewsPage from "./components/domains/pages/NewsPage";
import QuestCeQueCaFichePage from "./components/domains/pages/QuestCeQueCaFiche";
import Quoi2NeufPage from "./components/domains/pages/Quoi2NeufPage";
import SearchPage from "./components/domains/pages/SearchPage";
import { ARTICLE_URLS } from "./types/consts/articles";
import { ROUTE_URLS } from "./types/consts/routes";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <div className="ml-32 mr-32">
        <Routes>
          <Route exact path={ROUTE_URLS.HOME} element={<HomePage />} />
          <Route exact path={ROUTE_URLS.NEWS} element={<NewsPage />} />
          <Route exact path={ROUTE_URLS.FOLDERS} element={<FoldersPage />} />
          <Route exact path={ROUTE_URLS.RESEARCH} element={<SearchPage />} />
          <Route exact path={ROUTE_URLS.ABOUT} element={<AboutPage />} />
          <Route
            exact
            path={ARTICLE_URLS.QUOI_2_NEUF}
            element={<Quoi2NeufPage />}
          />
          <Route
            exact
            path={ARTICLE_URLS.QU_EST_CE_QUE_CA_FICHE}
            element={<QuestCeQueCaFichePage />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
