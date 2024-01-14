import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Interview } from './data/yewon'
import { GoArrowDown } from 'react-icons/go'

function Section({ id, artist, textQ, textA, typeSequence, setIsSequenceDone }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const [isQuestionDone, setIsQuestionDone] = useState(false)

  const Badge = ({ children, ...props }) => {
    return (
      <div className='w-fit h-fit mt-1 text-black border-b-2 border-black' {...props}>
        <span className='w-8 h-6 text-xs md:text-sm text-center flex flex-row justify-center items-center'>
          {children}
        </span>
      </div>
    )
  }

  console.log('id:' + id, 'typeSq:' + typeSequence)

  return (
    <section id={id} ref={ref} className='w-full h-screen'>
      <div className='w-full h-full bg-white border-red bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
        <div className='w-full h-full p-10 md:p-40 flex flex-col justify-center items-stretch gap-10  overflow-x-hidden'>
          {typeSequence >= id ? (
            <>
              <div className='w-full h-fit flex flex-col justify-start items-start gap-2'>
                <Badge>은총</Badge>
                <TypeAnimation
                  sequence={[
                    textQ,
                    () => {
                      setIsQuestionDone(true)
                    },
                  ]}
                  cursor={false}
                  className='w-full text-sm md:text-xl text-left text-black break-keep'
                />
              </div>
              <div className='w-full h-fit flex flex-col-reverse justify-end items-end gap-2'>
                {isQuestionDone && textA.length ? (
                  <>
                    <TypeAnimation
                      sequence={[
                        textA,
                        () => {
                          setIsSequenceDone(true)
                        },
                      ]}
                      cursor={false}
                      className='w-full max-w-[1080px] text-sm md:text-xl text-left text-black break-keep'
                    />
                    <Badge>{artist}</Badge>
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <div className='w-full h-fit opacity-30'>
              <div className='w-full h-fit flex flex-col justify-start items-start gap-2'>
                <Badge>은총</Badge>
                <p className='w-full text-sm md:text-xl text-left text-black break-keep'>{textQ}</p>
              </div>
              <div className='w-full h-fit flex flex-col-reverse justify-end items-end gap-2'>
                {textA.length ? (
                  <>
                    <p className='w-full max-w-[1080px] text-sm md:text-xl text-left text-black break-keep'>{textA}</p>
                    <Badge>{artist}</Badge>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
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

  const [typeSequence, setTypeSequence] = useState(0)

  let sectionStart = 0

  if (typeof document !== 'undefined') {
    sectionStart = document.getElementById('1')?.offsetTop
  }

  const scrollToStart = () => {
    setTypeSequence(1)
    window.scrollTo({ top: sectionStart, behavior: 'smooth' })
  }

  useEffect(() => {
    window.scrollTo({
      top: document.getElementById(typeSequence)?.offsetTop,
      behavior: 'smooth',
    })
  }, [typeSequence])

  console.log('setTypeSequence', typeSequence)
  return (
    <>
      <section className='w-full fixed flex flex-col top-0 h-screen bg-white text-black'>
        <div className='w-full h-fit bg-white'>
          <h1 className='w-full h-fit text-3xl'>한가닥 ( 2023 )</h1>
        </div>

        <h3 className='w-full h-fit text-md '>인터랙티브 웹 아트, 3D 가상 공간, 사운드, 홍연길 인터뷰 아카이빙</h3>
        <button
          className='text-xl py-1 active:bg-black active:text-white md:hover:bg-black md:hover:text-white border-b-2 border-black  flex flex-row justify-center items-center gap-2 animate-pulse'
          onClick={scrollToStart}
        >
          작품 인터뷰 보기 <GoArrowDown />
        </button>
      </section>
      <div className='w-full h-screen'>
        <section className='w-full h-screen bg-black'></section>
        {Interview.map((item, index) => {
          return (
            <Section
              key={index}
              artist={'예원'}
              id={index + 1}
              textQ={item.q}
              textA={item.a}
              typeSequence={typeSequence}
              setIsSequenceDone={(isDone) => {
                if (isDone) {
                  setTypeSequence(typeSequence + 1)
                }
              }}
            />
          )
        })}
      </div>
      <section className='w-full h-screen bg-black'>
        <div className='w-full h-full'>{children}</div>
      </section>
      <motion.div className='fixed  top-0 left-0 w-full h-1 bg-black' style={{ scaleX }} />
    </>
  )
}
