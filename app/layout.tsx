import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="px-6 sm:px-24 md:px-40 lg:px-56 xl:px-72 2xl:px-96">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
