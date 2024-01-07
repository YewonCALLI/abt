import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import { Box, Plane, useTexture, AxesHelper } from '@react-three/drei'
import * as THREE from 'three'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import SplashScreen from '../components/dom/SplashScreen'

// Dom components go here
export default function Page(props) {
  return (
    <>
      <SplashScreen />
      <div className='fixed z-0 w-full h-screen'>
        <Header />
        <Canvas>
          <Scene map>
            <Map />
          </Scene>
        </Canvas>
      </div>
    </>
  )
}

function Map() {
  const Texture = useTexture('/img/map.png')

  return (
    <>
      <Plane side='double' args={[32.73, 21.3]} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial attach='material' map={Texture} transparent />
      </Plane>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
