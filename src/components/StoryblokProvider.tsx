import { apiPlugin, storyblokInit } from '@storyblok/react'

storyblokInit({
  accessToken: 'Q7BU90ToNkaevy4h0HpEbwtt',
  use: [apiPlugin],
})
const StoryblokProvider = ({ children }: { children: React.ReactNode }) => {
  return children
}

export default StoryblokProvider
