'use client'

import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RootLayout from './layout'

const RootPage = () => (
  <BrowserRouter>
    <HelmetProvider>
      <MainMenu />
      <RootLayout>
        <Routes>
          <Route path={ROUTE_URLS.HOME} element={<HomePage />} />
          <Route path={ROUTE_URLS.NEWS} element={<NewsPage />} />
          <Route path={ROUTE_URLS.FOLDERS} element={<FoldersPage />} />
          <Route path={ROUTE_URLS.RESEARCH} element={<SearchPage />} />
          <Route path={ROUTE_URLS.ABOUT} element={<AboutPage />} />
          <Route path={FOLDERS_URLS.QUOI_2_NEUF} element={<Quoi2NeufPage />} />
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
      </RootLayout>
      <Footer />
    </HelmetProvider>
  </BrowserRouter>
)

export default RootPage
