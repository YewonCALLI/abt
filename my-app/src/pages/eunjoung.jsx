import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from '../components/dom/works/SectionScroll'
import { ArtInfo, Interview } from '@/components/dom/works/data/eunjoung'

export default function Page(props) {
  return (
    <>
      <div className='w-screen h-screen fixed top-0 z-50'>
        <iframe src='https://www.youtube.com/embed/2Z4m4lnjxkY' className='w-full h-full bg-black' />
      </div>
      <SectionScrollPage ArtInfo={ArtInfo} Interview={Interview}>
        <div className='w-full h-full '>
          <iframe
            src='
          https://www.youtube.com/embed/2Z4m4lnjxkY
          '
            className='w-full h-full bg-black'
          />
        </div>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: ArtInfo.title } }
}
