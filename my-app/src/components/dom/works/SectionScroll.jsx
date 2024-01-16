import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { GoArrowDown } from 'react-icons/go'
import { is } from '@babel/types'

function Section({ id, artist, textQ, textA, typeSequence, setIsSequenceDone }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const [isQuestionDone, setIsQuestionDone] = useState(false)

  const Badge = ({ children, ...props }) => {
    return (
      <div className='w-fit h-fit mt-1 text-white border-b-2 border-white' {...props}>
        <span className='w-8 h-6 text-xs md:text-sm text-center flex flex-row justify-center items-center'>
          {children}
        </span>
      </div>
    )
  }

  // console.log('id:' + id, 'typeSq:' + typeSequence)

  return (
    <section id={id} ref={ref} className='w-full h-screen'>
      <div className='w-full h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
        <div className='w-full  max-w-[1080px] h-full p-10 md:p-40 flex flex-col justify-center items-stretch gap-10  overflow-x-hidden'>
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
                  speed={50}
                  cursor={false}
                  className='w-full text-sm md:text-xl text-left text-white break-keep '
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
                      speed={50}
                      className='w-full text-sm md:text-xl text-left text-white break-keep
                      '
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
                <p className='w-full text-sm md:text-xl text-left text-white break-keep'>{textQ}</p>
              </div>
              <div className='w-full h-fit flex flex-col-reverse justify-end items-end gap-2'>
                {textA.length ? (
                  <>
                    <p className='w-full max-w-[1080px] text-sm md:text-xl text-left text-white break-keep'>{textA}</p>
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
  const { Interview, ArtInfo, children, link } = props
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 10,
  })

  const getCurrentSection = () => {
    const scrollPosition = window.scrollY
    // Add logic to determine the current section based on scroll position
    // For simplicity, let's assume each section has a height of 100vh
    const currentSection = Math.floor(scrollPosition / window.innerHeight) + 1
    return currentSection
  }

  const [typeSequence, setTypeSequence] = useState(0)

  const [isSequenceDone, setIsSequenceDone] = useState(false)

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

  return (
    <>
      <section
        className='w-full fixed transition-all flex flex-col justify-center items-start gap-4 p-4 md:p-20 top-0 h-screen bg-white text-black'
        style={{
          display: isSequenceDone ? 'none' : 'flex',
        }}
      >
        <div className='w-full h-fit pb-1 border-b border-black'>
          <h1 className='w-full h-fit text-2xl md:text-4xl font-[bkkserif]'>{ArtInfo.title}</h1>
          <h3 className='w-full h-fit text-2xl md:text-4xl font-[italianno]'>{ArtInfo.category}</h3>
        </div>
        <div className='w-full md:w-1/2 h-fit flex flex-row flex-wrap justify-start gap-1 md:gap-2 items-center'>
          {ArtInfo.caption.map((item, index) => {
            return (
              <span
                key={index}
                className='w-fit h-fit text-xxs md:text-xs bg-black text-white px-1 font-[bkksansLight] '
              >
                {item}
              </span>
            )
          })}
        </div>

        <div className='w-full md:w-1/2 h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit text-sm md:text-md border-b border-black'>Artist</span>
          <span className='w-fit h-fit text-xxs md:text-xs '>{ArtInfo.artist}</span>
        </div>
        <div className='w-full h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit text-sm md:text-md  border-b border-black'>Credit</span>
          <div className='flex flex-col'>
            {ArtInfo.credit.map((item, index) => {
              return (
                <span key={index} className='w-fit h-fit text-xxs md:text-xs '>
                  {item}
                </span>
              )
            })}
          </div>
        </div>
        <div className='w-full h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit  text-sm md:text-md border-b border-black'>Detail</span>
          <span className='w-fit h-fit text-xxs md:text-xs '>{ArtInfo.detail}</span>
        </div>
        <div className='fixed -z-10 top-0 left-0 w-full h-full'>
          <div className='fixed z-10 top-0 w-full h-full bg-white bg-opacity-30 backdrop-blur-xl'></div>
          {children}
        </div>
        <div className='w-full h-fit gap-4 flex justify-start items-center '>
          <button
            className='bg-white border border-black text-black
          w-fit h-fit flex flex-row justify-center items-center text-lg px-2
          '
            onClick={() => {
              setIsSequenceDone(true)
            }}
          >
            작품보기
          </button>
          <button
            className='bg-white border border-black text-black
          w-fit h-fit flex flex-row justify-center items-center text-lg px-2
          '
            onClick={scrollToStart}
          >
            작품 인터뷰 보기 <GoArrowDown />
          </button>
        </div>
      </section>
      <div className='w-full h-screen'>
        <section className='w-full h-screen '></section>
        {Interview.map((item, index) => {
          return (
            <Section
              key={index}
              artist={ArtInfo.name}
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
        {isSequenceDone && (
          <section className='fixed top-0 p-10 w-screen h-screen bg-black '>
            <div className='w-full h-full '>
              <iframe src={link} className='w-full h-full bg-black ' />
            </div>
            <button
              className='fixed z-50 top-0 right-0 bg-black  text-white
          w-fit h-fit flex flex-row justify-center items-center text-2xl px-4 
          '
              onClick={() => {
                setIsSequenceDone(false)
              }}
            >
              X
            </button>
          </section>
        )}
      </div>

      <motion.div className='fixed  top-0 left-0 w-full h-1 bg-white' style={{ scaleX }} />
    </>
  )
}
