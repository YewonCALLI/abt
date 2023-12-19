import { useRouter } from 'next/router'
import Image from 'next/image'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { IoCloseOutline } from 'react-icons/io5'

export default function Home(props) {
  const router = useRouter()

  return (
    <>
      <button className='fixed top-0 left-0  px-4' onClick={() => router.push('/')}>
        <Image src='/img/logo.png' width={100} height={100} />
      </button>
      <div className='fixed top-0 right-0 z-50 flex items-center justify-center w-1/3 '>
        <ToggleBox />
      </div>
    </>
  )
}

const ToggleBox = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)

  const toggleBox = () => {
    setIsExpanded((prev) => !prev)
    gsap.to(contentRef.current, {
      height: isExpanded ? 0 : 'auto', // 토글 상태에 따라 높이 조정
      duration: 0.5,
      ease: 'power1.inOut',
    })
  }

  return (
    <div onClick={toggleBox} className='bg-black w-full h-fit rounded-xl'>
      <div className='w-full h-fit p-4 border'>
        <span className='text-xl font-bold text-white'>INFO</span>
      </div>
      {isExpanded && (
        <div ref={contentRef} className='w-full h-fit p-4 text-white' style={{ overflow: 'hidden' }}>
          {/* 컨텐츠 내용 */}
          Your content goes here...
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  return { props: { title: 'ABT' } }
}
