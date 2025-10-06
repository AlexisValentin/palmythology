import React from 'react'
import StoryblokProvider from '../src/components/StoryblokProvider'
import Footer from '../src/components/domains/footer/Footer'
import MainMenu from '../src/components/domains/navigation/MainMenu'
import Breadcrumbs from '../src/components/generics/Breadcrumbs'
import TrackingNotice from '../src/components/domains/tracking/TrackingNotice'
import '../src/global.css'

interface MainLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  icons: {
    icon: 'https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png',
    shortcut: 'https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png',
    apple: 'https://a.storyblok.com/f/187414/2048x2048/c834d0c07d/logo.png',
  },
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StoryblokProvider>
      <html lang="fr">
        <head>
          {process.env.ENV === 'production' && (
            <script
              defer
              data-domain="palmythology.com"
              src="https://plausible.io/js/script.js"
            ></script>
          )}
        </head>
        <body>
          <TrackingNotice />
          <MainMenu />
          <div className="flex flex-col min-h-screen">
            <div className="px-6 mb-20 sm:px-12 md:px-24 lg:px-40 xl:px-56 2xl:px-72">
              {children}
            </div>
          </div>
          <Breadcrumbs />
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  )
}

export default MainLayout
