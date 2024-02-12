import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import { Logo } from '@/components/dom/Logo'
import { useRouter } from 'next/router'
import { GoArrowLeft } from 'react-icons/go'

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

export async function getStaticProps() {
  return { props: { title: '도전! 실버벨' } }
}
