import React from 'react'
import { useRef } from 'react'
import { SectionScrollPage } from '../components/dom/works/SectionScroll'
import { ArtInfo, Interview } from '@/components/dom/works/data/eunjoung'

export default function Page(props) {
  return (
    <>
      <SectionScrollPage
        ArtInfo={ArtInfo}
        Interview={Interview}
        link={'https://www.youtube.com/embed/5xtOz-RHkaQ?si=BZDJUoG25uJ57c2Q'}
      >
        <div className='w-full h-full '>
          <iframe
            src='
          https://www.youtube.com/embed/5xtOz-RHkaQ?si=BZDJUoG25uJ57c2Q
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
