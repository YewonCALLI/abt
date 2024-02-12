import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import { Logo } from '@/components/dom/Logo'
import { Copyright } from '@/components/dom/Copyright'
import { useRouter } from 'next/router'
import { GoArrowLeft } from 'react-icons/go'
import { Text, Text3D, Float } from '@react-three/drei'
import { Html } from 'next/document'

export default function Page(props) {
  const router = useRouter()

  return (
    <>
      <div className='fixed z-0 w-full h-screen'>
        <button
          onClick={() => {
            router.push('/')
          }}
          className='w-fit h-fit fixed top-4 left-4
          flex flex-row gap-2 justify-center items-center cursor-pointer active:bg-white active:text-black hover:bg-white hover:text-black transition-all duration-300 active: md:hover:shadow-xl shadow-white z-20 bg-black px-4 py-1 border-white border rounded-full text-white font-[bkkserif] text-md md:text-xl'
        >
          <GoArrowLeft />
          back
        </button>
        <div className='text-white w-full h-screen flex flex-col justify-center items-center '>
          <span className='text-lg font-[bkkserif]'>준비중입니다...</span>
          <span className='text-4xl font-[italianno]'>Coming soon...</span>
        </div>
        <Logo className='fixed bottom-0 right-0 z-20' />
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
