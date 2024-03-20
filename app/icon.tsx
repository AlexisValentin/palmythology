import React from 'react'
import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}

const Icon = () =>
  new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    },
  )

export default Icon
