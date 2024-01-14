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
        <div className='w-full h-1/2 md:h-full '>
          <iframe src='https://onethread.vercel.app/' className='w-full h-full bg-black' />
        </div>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
