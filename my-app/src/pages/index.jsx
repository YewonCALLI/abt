import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import { Box, Plane, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import { Logo } from '@/components/dom/Logo'
import SplashScreen from '@/components/dom/SplashScreen'
import { Copyright } from '@/components/dom/Copyright'

export default function Page(props) {
  return (
    <>
      <SplashScreen />
      <div className='fixed z-0 w-full h-screen'>
        <Header />
        <Canvas>
          <Scene map>
            <Map />
            {/* <gridHelper args={[100, 100]} scale={0.5} /> */}
          </Scene>
        </Canvas>
        <Logo className='absolute bottom-0 right-0 z-20' />
        <Copyright className='absolute bottom-0 left-0 z-20' />
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
