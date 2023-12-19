import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function SplashScreen(props) {
  const [isDisplayed, setIsDisplayed] = useState(true)
  const splashRef = useRef(null)

  useEffect(() => {
    gsap.to(splashRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 10,
      ease: 'circ.out',
      onComplete: () => {
        setIsDisplayed(false) // 애니메이션이 완료되면 스플래시 스크린을 숨깁니다.
      },
    })
  }, [])

  if (!isDisplayed) {
    return null // 스플래시 스크린을 표시하지 않습니다.
  }

  return (
    <div
      ref={splashRef}
      className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen text-5xl font-bold text-white '>
      <Image src='/img/logo-color.png' width={200} height={200} />
    </div>
  )
}

export async function getStaticProps() {
  return { props: { title: 'ABT' } }
}
