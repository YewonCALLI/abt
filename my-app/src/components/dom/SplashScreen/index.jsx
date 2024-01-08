import { AnimatePresence } from 'framer-motion'
import { MotionDiv } from '@/styles/common.styles'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export function SplashScreen(props) {
  const [isSplashDone, setIsSplashDone] = useState(false)

  return (
    <AnimatePresence>
      {!isSplashDone && (
        <MotionDiv
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed bg-black top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen text-5xl font-bold text-white '
        >
          <Image src='/img/logo.png' width={100} height={100} alt='logo' />
          <TypeAnimation
            className='font-light text-2xl'
            sequence={[
              '도전! 실버벨 : 홍연길 프로젝트',
              1000,
              () => {
                setIsSplashDone(true)
              },
            ]}
          />
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
