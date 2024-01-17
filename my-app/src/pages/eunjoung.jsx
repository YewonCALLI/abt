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
        link={'https://player.vimeo.com/video/903631590?h=dde2131ccb&title=0&byline=0&portrait=0'}
      >
        <div className='w-full h-full '>
          <iframe
            src='
          https://player.vimeo.com/video/903631590?h=dde2131ccb&title=0&byline=0&portrait=0
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
