import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from '../components/dom/works/SectionScroll'
import { ArtInfo, Interview } from '@/components/dom/works/data/yewon'

export default function Page(props) {
  return (
    <>
      <div className='w-screen h-screen fixed top-0 z-50'>
        <iframe src='ttps://hongyeon.vercel.app/' className='w-full h-full bg-black' />
      </div>
      <SectionScrollPage ArtInfo={ArtInfo} Interview={Interview} link={'https://hongyeon.vercel.app/'}>
        <div className='w-full h-full '>
          <iframe src='https://hongyeon.vercel.app/' className='w-full h-full bg-black' />
        </div>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: ArtInfo.title } }
}
