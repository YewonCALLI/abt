import { AnimatePresence } from 'framer-motion'
import { MotionDiv } from '@/styles/common.styles'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function SplashScreen(props) {
  const [isSplashDone, setIsSplashDone] = useState(false)

  return (
    <AnimatePresence>
      {!isSplashDone && (
        <MotionDiv
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed bg-black  top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen text-5xl  '
        >
          <Image src='/img/logo-color.png' width={100} height={100} alt='logo' />
          <TypeAnimation
            className='text-black bg-white text-xl mt-4 px-2 '
            sequence={[
              '도전! 실버벨 : 홍연길 프로젝트',
              1000,
              () => {
                setIsSplashDone(true)
              },
            ]}
          />
          <div className='text-white gap-2 justify-center items-center flex flex-col mt-6 text-xs'>
            <p className='text-lg'>아바타(ABT)</p>
            <p>기획 | 최은총</p>
            <p>작가 | 도재인, 임은정, 장예원</p>
            <p>협력 | 오세진</p>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
