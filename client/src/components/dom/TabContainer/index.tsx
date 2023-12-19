import { SlideDiv } from '@/styles/common.styles'
import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface Props {
  title: string
  children: React.ReactNode
}

export default function TabContainer(props: Props) {
  const { title, children } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      gsap.to(contentRef.current, {
        ease: 'power3.out',
        maxHeight: 500,
        marginTop: 10,
        duration: 0.3,
      }) // Adjust maxHeight as needed
    } else {
      gsap.to(contentRef.current, {
        ease: 'power3.out',
        maxHeight: 0,
        marginTop: 0,
        duration: 0.3,
      })
    }
  }

  return (
    <div className='bg-black w-full h-fit p-2 flex flex-col rounded-lg'>
      <div className='w-full h-fit flex flex-row justify-between items-center text-white'>
        <span onClick={toggleExpansion} className='text-2xl px-2 w-full cursor-pointer'>
          {title}
        </span>
        <IoCloseOutline className='text-2xl cursor-pointer' onClick={toggleExpansion} />
      </div>
      <div ref={contentRef} className='w-full overflow-hidden text-white'>
        {props.children}
      </div>
    </div>
  )
}
