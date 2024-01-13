import { useRef } from 'react'
import Header from '@/config'
import Frame from '@/components/dom/Frame'
import '@/styles/index.css'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps = { title: 'Home' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />

      <Frame ref={ref}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </Frame>
    </>
  )
}
