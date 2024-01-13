import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from './works/SectionScroll'
import { ParallaxProvider } from 'react-scroll-parallax'
import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import { Box } from '@react-three/drei'

export default function Page(props) {
  return (
    <>
      <SectionScrollPage>
        <Canvas>
          <Scene orbit autoRotate={true} enableZoom={false} autoRotateSpeed={5}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box args={[5, 5, 5]} position={[0, 0, 0]}>
              <meshStandardMaterial attach='material' color='red' />
            </Box>
          </Scene>
        </Canvas>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
