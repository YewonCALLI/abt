import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from '../components/dom/works/SectionScroll'
import { ArtInfo, Interview } from '@/components/dom/works/data/yewon'

export default function Page(props) {
  return (
    <>
      <SectionScrollPage ArtInfo={ArtInfo} Interview={Interview}>
        <div className='w-full h-full '>
          <iframe src='https://www.sejinoh.site/' className='w-full h-full bg-black' />
        </div>
      </SectionScrollPage>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: ArtInfo.title } }
}
