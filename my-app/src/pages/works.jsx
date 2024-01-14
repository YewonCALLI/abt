import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from '../components/dom/works/SectionScroll'
import { ParallaxProvider } from 'react-scroll-parallax'
import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import { Box, Sky } from '@react-three/drei'

export default function Page(props) {
  return (
    <>
      <SectionScrollPage>
        <div className='p-4'>
          <iframe src='https://www.youtube.com/embed/2Vv-BfVoq4g' className='w-full h-screen rounded-lg' />
        </div>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
