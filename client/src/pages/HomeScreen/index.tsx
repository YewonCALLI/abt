import { useRouter } from 'next/router'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import TabContainer from '@/components/dom/TabContainer'

export default function HomeScreen(props) {
  const router = useRouter()

  return (
    <>
      <button className='fixed top-0 left-0  px-4' onClick={() => router.push('/')}>
        <Image src='/img/logo-black.png' width={80} height={80} alt='logo' />
      </button>
      <div className='fixed top-0 right-0 z-10 flex flex-col items-start justify-start w-2/5 h-screen p-4 overflow-y-scroll gap-4'>
        <TabContainer title='INFO'>
          <div className='flex flex-col px-2 py-4 border-t gap-4'>
            <h1 className='text-xl'>아바타 ABT</h1>
            <p className='text-sm'>
              팀명 아바타(ABT)는 영화 아바타 Avatar의 새로운 생명체 '아바타'에서 따와 팀의 키워드인 아트(Art),
              바디(Body), 테크(Tech)의 약자로 재해석해 탄생했다. 수행과 매체를 연구하는 기획자 최은총, 퍼포먼스 작가
              임은정, 아트앤테크 작가 장예원, 미디어 작가 도재인은 서로의 전문성을 융합한 '디지털 퍼포먼스'를 선보인다.
              ‘디지털 퍼포먼스’는 매체-신체 키워드에 해당하는 한 주제로, 미디어와 테크놀로지 그리고 퍼포먼스가 결합된
              장르를 통칭한다. 아바타는 2023년 8월부터 메타-홍연길 프로젝트(Meta-Hongyeon Road Project)를 선보이며
              사회-문화-자연을 연결하는 융복합 프로젝트를 선보일 예정이다. 프로젝트는 AI/웹/설치/영상/퍼포먼스 등 다양한
              장르의 현대예술을 온/오프라인을 통해 선보일 예정이다. 더하여 국/내외 합동 교류 프로젝트 기획하여 지역과
              세계를 연결하는 국제적인 네트워킹 기회를 만들고자 한다.
            </p>
            <p className='text-sm'>멤버 Members</p>
            <span>도재인/Tao Jane</span>
            <span>임은정/Im Eunjoung</span>
            <span>장예원/Yewon Jang</span>
            <span>최은총/Choi Eunchong</span>
          </div>
        </TabContainer>
      </div>
      <div className='fixed bottom-0 left-0 z-10 flex items-center p-4 justify-center w-fit'>
        <p className='text-2xl uppercase'>Meta-Hongyeon Road Project</p>
      </div>
    </>
  )
}
