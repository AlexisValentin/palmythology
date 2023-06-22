import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/domains/footer/Footer'
import MainMenu from './components/domains/navigation/MainMenu'
import AboutPage from './components/domains/pages/About.page'
import CardDetailsPage from './components/domains/pages/CardDetails.page'
import FoldersPage from './components/domains/pages/Folders.page'
import HomePage from './components/domains/pages/Home.page'
import NewsPage from './components/domains/pages/News.page'
import NewsArticleDetailsPage from './components/domains/pages/NewsArticleDetails.page'
import QuestCeQueCaFichePage from './components/domains/pages/QuestCeQueCaFiche.page'
import Quoi2NeufPage from './components/domains/pages/Quoi2Neuf.page'
import SearchPage from './components/domains/pages/Search.page'
import { FOLDERS_URLS } from './types/consts/folders'
import { ROUTE_URLS } from './types/consts/routes'
import { createContext, useState } from 'react'
import { DEFAULT_THEME, THEMES } from './types/styles/theme'
import { LOCAL_STORAGE_KEYS, getFromLocalStorage } from './helpers/storage'

export const ThemeContext = createContext(THEMES.LIGHT)

const App = () => {
  const [appTheme, setAppTheme] = useState(
    (getFromLocalStorage(LOCAL_STORAGE_KEYS.APP_THEME) as THEMES) ??
      DEFAULT_THEME,
  )

  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeContext.Provider value={appTheme}>
          <MainMenu setAppTheme={setAppTheme} />
          <div className="px-6 sm:px-24 md:px-40 lg:px-56 xl:px-72 2xl:px-96">
            <Routes>
              <Route path={ROUTE_URLS.HOME} element={<HomePage />} />
              <Route path={ROUTE_URLS.NEWS} element={<NewsPage />} />
              <Route path={ROUTE_URLS.FOLDERS} element={<FoldersPage />} />
              <Route path={ROUTE_URLS.RESEARCH} element={<SearchPage />} />
              <Route path={ROUTE_URLS.ABOUT} element={<AboutPage />} />
              <Route
                path={FOLDERS_URLS.QUOI_2_NEUF}
                element={<Quoi2NeufPage />}
              />
              <Route
                path={FOLDERS_URLS.QU_EST_CE_QUE_CA_FICHE}
                element={<QuestCeQueCaFichePage />}
              />
              <Route path={ROUTE_URLS.CARD} element={<CardDetailsPage />} />
              <Route
                path={ROUTE_URLS.ARTICLE}
                element={<NewsArticleDetailsPage />}
              />
            </Routes>
          </div>
          <Footer />
        </ThemeContext.Provider>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
