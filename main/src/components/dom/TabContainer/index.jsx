import { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import gsap from 'gsap'

export default function TabContainer(props) {
  const { title, children } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (isExpanded) {
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
  }, [isExpanded])

  return (
    <div className='bg-black border border-white w-full h-fit p-2 flex flex-col'>
      <div className='w-full h-fit flex flex-row justify-between items-center text-white'>
        <span onClick={toggleExpansion} className='text-lg px-2 w-full cursor-pointer'>
          {title}
        </span>
        <IoCloseOutline className='text-xl cursor-pointer' onClick={toggleExpansion} />
      </div>
      <div ref={contentRef} className='w-full overflow-hidden text-white'>
        {props.children}
      </div>
    </div>
  )
}
