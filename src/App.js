import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/domains/footer/Footer";
import MainMenu from "./components/domains/navigation/MainMenu";
import AboutPage from "./components/domains/pages/About.page";
import CardDetailsPage from "./components/domains/pages/CardDetails.page";
import FoldersPage from "./components/domains/pages/Folders.page";
import HomePage from "./components/domains/pages/Home.page";
import NewsPage from "./components/domains/pages/News.page";
import QuestCeQueCaFichePage from "./components/domains/pages/QuestCeQueCaFiche.page";
import Quoi2NeufPage from "./components/domains/pages/Quoi2Neuf.page";
import SearchPage from "./components/domains/pages/Search.page";
import { FOLDERS_URLS } from "./types/consts/folders";
import { ROUTE_URLS } from "./types/consts/routes";

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <MainMenu />
      <div className="pl-60 pr-60">
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
