import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { GoArrowDown, GoArrowLeft, GoXCircle } from 'react-icons/go'
import { useRouter } from 'next/router'

function Section({
  id,
  artist,
  textQ,
  textA,
  isSequenceDone,
  sequence,
  typeSequence,
  setIsSequenceDone,
  setSequence,
  onExitPress,
}) {
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
      {sequence > 0 && (
        <>
          <div
            className='
      fixed z-50 bottom-4 left-4 w-fit h-fit flex flex-row justify-center items-center text-white opacity-70 text-xs md:text-sm
      '
          >
            인터뷰어/인터뷰 정리 | 최은총
          </div>
          <button
            className='fixed z-50 top-0 right-0 text-white
          w-fit h-fit flex flex-row justify-center items-center text-2xl p-4
          md:hover:opacity-50 transition-all duration-300 active:opacity-50
          '
            onClick={() => {
              setSequence(0)
              onExitPress()
            }}
          >
            <GoXCircle />
          </button>
        </>
      )}

      <div className='w-full h-full bg-white bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
        <div className='w-full  max-w-[1080px] h-screen p-10 md:p-40 flex flex-col justify-start items-start gap-10  overflow-x-hidden'>
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
                  className='w-full text-md md:text-xl text-left text-white break-keep '
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
                      className='w-full text-md md:text-xl text-left text-white break-keep
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

  const router = useRouter()

  const getCurrentSection = () => {
    const scrollPosition = window.scrollY
    // Add logic to determine the current section based on scroll position
    // For simplicity, let's assume each section has a height of 100vh
    const currentSection = Math.floor(scrollPosition / window.innerHeight) + 1
    return currentSection
  }

  const [isTypeStart, setIsTypeStart] = useState(false)

  const [typeSequence, setTypeSequence] = useState(0)

  const [isSequenceDone, setIsSequenceDone] = useState(false)

  let sectionStart = 0

  if (typeof document !== 'undefined') {
    sectionStart = document.getElementById('1')?.offsetTop
  }

  const scrollToStart = () => {
    setIsTypeStart(true)
    setTypeSequence(1)
    // window.scrollTo({ top: sectionStart, behavior: 'smooth' })
  }

  useEffect(() => {
    window.scrollTo({
      top: document.getElementById(typeSequence)?.offsetTop,
      behavior: 'smooth',
    })
  }, [typeSequence])

  // useEffect(() => {
  //   typeSequence === 0 && window.scrollTo({ top: 0, behavior: 'smooth' })
  // }, [typeSequence])

  console.log('isTypeStart', isTypeStart)

  return (
    <>
      <section
        className='w-full transition-all flex flex-col justify-center items-start gap-4 p-4 md:p-20 top-0 h-full min-h-screen bg-white text-black'
        style={{
          display: isSequenceDone ? 'none' : 'flex',
        }}
      >
        <button
          className='bg-white border border-black text-black
          w-fit h-fit flex flex-row justify-center items-center text-lg px-2 fixed top-4 left-4 z-50
          md:hover:bg-black md:hover:text-white transition-all duration-300 active:bg-black active:text-white
          '
          onClick={() => {
            router.back()
          }}
        >
          <GoArrowLeft />
          <span className='ml-2'>뒤로가기</span>
        </button>
        <div className='w-full h-[70svh]'>{children}</div>
        <div className='w-full h-fit pb-1 border-b border-black'>
          <h1 className='w-full h-fit text-2xl md:text-4xl font-[bkkserif]'>{ArtInfo.title}</h1>
          <h3 className='w-full h-fit text-2xl md:text-4xl font-[italianno]'>{ArtInfo.category}</h3>
        </div>
        <div className='w-full md:w-1/2 h-fit flex flex-row flex-wrap justify-start gap-1 md:gap-2 items-center'>
          {ArtInfo.caption.map((item, index) => {
            return (
              <span
                key={index}
                className='w-fit h-fit text-sm md:text-md bg-black text-white px-1 font-[bkksansLight] '
              >
                {item}
              </span>
            )
          })}
        </div>

        <div className='w-full md:w-1/2 h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit text-md md:text-lg border-b border-black'>Artist</span>
          <span className='w-fit h-fit text-sm md:text-md '>{ArtInfo.artist}</span>
        </div>
        <div className='w-full h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit text-md md:text-lg  border-b border-black'>Credit</span>
          <div className='flex flex-col gap-2 max-w-[355px] md:max-w-[500px] break-keep '>
            {ArtInfo.credit.map((item, index) => {
              return (
                <span key={index} className='w-fit h-fit text-sm md:text-md '>
                  {item}
                </span>
              )
            })}
          </div>
        </div>
        <div className='w-full h-fit flex flex-col justify-center items-start gap-1'>
          <span className='w-fit h-fit  text-md md:text-lg border-b border-black'>Detail</span>
          <span className='w-fit h-fit text-sm md:text-md leading-[1.6] break-keep '>{ArtInfo.detail}</span>
        </div>
        <div className='w-full h-fit gap-4 flex justify-start items-center '>
          <button
            className='bg-black border border-black text-white
          w-fit h-fit flex flex-row justify-center items-center text-lg px-2
          md:hover:bg-white md:hover:text-black transition-all duration-300 active:bg-white active:text-black
          '
            onClick={() => {
              setIsSequenceDone(true)
            }}
          >
            작품보기
          </button>
          <button
            className='bg-white border border-black text-black
          w-fit h-fit flex flex-row justify-center items-center text-lg px-2 md:hover:bg-black md:hover:text-white transition-all duration-300 active:bg-black active:text-white
          '
            onClick={scrollToStart}
          >
            작품 인터뷰 보기 <GoArrowDown />
          </button>
        </div>
        <p className='text-md'>* 인터뷰어/인터뷰 정리 | 최은총</p>
      </section>
      {isTypeStart && (
        <div className=' w-full h-screen flex flex-col'>
          {/* <section className='w-full h-screen '></section> */}

          {Interview.map((item, index) => {
            return (
              <Section
                key={index}
                artist={ArtInfo.name}
                id={index + 1}
                textQ={item.q}
                textA={item.a}
                sequence={typeSequence}
                isSequenceDone={isSequenceDone}
                typeSequence={typeSequence}
                setIsSequenceDone={(isDone) => {
                  if (isDone) {
                    setTypeSequence(typeSequence + 1)
                  }
                }}
                setSequence={(sequence) => {
                  setTypeSequence(sequence)
                }}
                onExitPress={() => {
                  setIsTypeStart(false)
                }}
              />
            )
          })}
        </div>
      )}

      {isSequenceDone && (
        <section className='fixed top-0 p-10 w-screen h-screen bg-black '>
          <div className='w-full h-full '>
            <iframe src={link} className='w-full h-full bg-black ' />
          </div>
          <button
            className='fixed z-50 top-0 right-0  text-white
          w-fit h-fit flex flex-row justify-center items-center text-2xl p-4
          md:hover:opacity-50 transition-all duration-300 active:opacity-50
          '
            onClick={() => {
              setIsTypeStart(false)
              setIsSequenceDone(false)
            }}
          >
            <GoXCircle />
          </button>
        </section>
      )}
      <motion.div className='fixed  top-0 left-0 w-full h-1 bg-white' style={{ scaleX }} />
    </>
  )
}
