import React from 'react'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Section({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section ref={ref} className='w-full h-screen'>
      <div className='w-full h-full bg-white border border-red bg-opacity-10 backdrop-blur-md'>{id}</div>
    </section>
  )
}

export const SectionScrollPage = (props) => {
  const { children } = props
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 10,
  })

  return (
    <>
      <section className='w-full fixed top-0 h-screen'>
        <div className='w-full h-full bg-white'>{children}</div>
      </section>
      <div className='w-full h-screen'>
        <section className='w-full h-screen bg-black'></section>
        {[1, 2, 3, 4, 5].map((index) => (
          <Section id={index} key={'section'} />
        ))}
      </div>
      <motion.div className='fixed top-0 left-0 w-full h-1 bg-black' style={{ scaleX }} />
    </>
  )
}
