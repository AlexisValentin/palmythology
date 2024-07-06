import React from 'react'

import StoryblokProvider from '../src/components/StoryblokProvider'
import Footer from '../src/components/domains/footer/Footer'
import MainMenu from '../src/components/domains/navigation/MainMenu'
import '../src/global.css'
import Modal from '../src/components/generics/Modal'
import { MODAL_IDS } from '../src/types/consts/modal'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
          <Modal modalId={MODAL_IDS.TRACKING} />
          <MainMenu />
          <div className="flex flex-col min-h-screen">
            <div className="px-6 mb-20 sm:px-24 md:px-40 lg:px-56 xl:px-72 2xl:px-96">
              {children}
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  )
}

export default HomeLayout
