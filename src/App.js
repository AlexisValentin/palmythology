import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/domains/footer/Footer";
import MainMenu from "./components/domains/navigation/MainMenu";
import AboutPage from "./components/domains/pages/AboutPage";
import CardDetailsPage from "./components/domains/pages/CardDetailsPage";
import FoldersPage from "./components/domains/pages/FoldersPage";
import HomePage from "./components/domains/pages/HomePage";
import NewsPage from "./components/domains/pages/NewsPage";
import QuestCeQueCaFichePage from "./components/domains/pages/QuestCeQueCaFichePage";
import Quoi2NeufPage from "./components/domains/pages/Quoi2NeufPage";
import SearchPage from "./components/domains/pages/SearchPage";
import { FOLDERS_URLS } from "./types/consts/folders";
import { ROUTE_URLS } from "./types/consts/routes";

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
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
            path={FOLDERS_URLS.QUOI_2_NEUF}
            element={<Quoi2NeufPage />}
          />
          <Route
            exact
            path={FOLDERS_URLS.QU_EST_CE_QUE_CA_FICHE}
            element={<QuestCeQueCaFichePage />}
          />
          <Route exact path={ROUTE_URLS.CARD} element={<CardDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
