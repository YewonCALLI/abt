import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import { Box, Plane, useTexture, Html } from '@react-three/drei'
import * as THREE from 'three'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import { Logo } from '@/components/dom/Logo'
import SplashScreen from '@/components/dom/SplashScreen'
import { Copyright } from '@/components/dom/Copyright'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()

  return (
    <>
      {/* <SplashScreen /> */}
      <div className='fixed z-0 w-full h-screen'>
        <div
          onClick={() => {
            router.push('/')
          }}
          className='w-1/2 h-fit fixed top-4 left-4
          flex justify-center items-center cursor-pointer transition-all duration-300 active: md:hover:shadow-xl shadow-white active:opacity-60 md:hover:opacity-60 z-20'
        >
          <Image src='/img/title.svg' width={1000} height={100} />
        </div>
        <button
          onClick={() => {
            router.push('/archive')
          }}
          className='w-fit h-fit fixed top-4 right-4
          flex flex-row gap-2 justify-center items-center cursor-pointer active:bg-white active:text-black hover:bg-white hover:text-black transition-all duration-300 active: md:hover:shadow-xl shadow-white z-20 bg-black px-4 py-1 border-white border rounded-full text-white font-[bkkserif] text-md md:text-xl'
        >
          <span className='w-2 h-2 rounded-full bg-[#00FF88]'></span>
          <span className='w-2 h-2 rounded-full bg-[#FF66B0]'></span>
          <span className='w-2 h-2 rounded-full bg-[#F0E442]'></span>
          <span className='w-2 h-2 rounded-full bg-[#009ACC]'></span>
          Archive
        </button>
        <Canvas>
          <Scene map>
            <Map />
            <Pin
              position={[-2, 0.05, -2]}
              color='#00FF88'
              onClick={() => {
                router.push('/yewon')
                // window.open('https://hongyeon.vercel.app/')
              }}
              title='홍연 1.0'
              artist='Yewon Jang'
              add='홍연경로당'
            />
            <Pin
              position={[2, 0.05, -4]}
              color='#FF66B0'
              onClick={() => {
                router.push('/jane')
                // window.open('https://onethread.vercel.app/')
              }}
              title='한 가닥'
              artist='Jane Tao'
              add='강원종합포장'
            />
            <Pin
              position={[-6, 0.05, 0]}
              color='#F0E442'
              onClick={() => {
                router.push('/eunjoung')
                // window.open('https://youtu.be/5xtOz-RHkaQ')
              }}
              title='골든 에이지'
              artist='Eunjoung Im'
              add='홍연길'
            />
            <Pin
              position={[-1.1, 0.05, 2.19]}
              color='#009ACC'
              title='실버벨'
              add='주택가'
              onClick={() => {
                router.push('/silverbell')
                // window.open('https://onethread.vercel.app/')
              }}
            />
            {/* <gridHelper args={[100, 100]} scale={0.5} /> */}
          </Scene>
        </Canvas>
        <Logo className='fixed bottom-0 right-0 z-20' />
        <Copyright className='fixed bottom-0 left-0 z-20' />
      </div>
    </>
  )
}

function Pin({ position, add, title, artist, children, color, onClick }) {
  return (
    <Html className='content' rotation-x={-Math.PI / 2} position={position} occlude>
      <div
        onClick={onClick}
        className='w-fit h-fit  
       flex flex-row gap-2 justify-center items-center cursor-pointer active:scale-90 hover:scale-90 transition-all duration-300 active: md:hover:shadow-xl shadow-white active:opacity-60 md:hover:opacity-60'
      >
        <div
          className='w-[90px] h-[90px] relative rounded-full flex justify-center items-center'
          style={{
            backgroundColor: color || 'white',
          }}
        >
          <p className='absolute top-1/2 left-1/2 w-[100px] -translate-x-1/2 -translate-y-1/2 text-black text-xs h-fit text-center'>
            {add}
          </p>
        </div>
        <div className='w-24 h-fit flex flex-col justify-center items-start'>
          <span className='text-lg font-bold text-white'>{title}</span>
          <span className='text-xs font-[bkkserif] text-white'>{artist}</span>
        </div>
        {children}
      </div>
    </Html>
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
  return { props: { title: '도전! 실버벨' } }
}
