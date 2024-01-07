import * as S from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuModal from './MenuModal'
import { AnimatePresence } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const Header = ({ ...props }) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <S.Header>
        <S.HeaderLogo
          isMenuOpen={isMenuOpen}
          onClick={() => {
            if (router.pathname !== '/') {
              router.push('/')
            } else {
              router.reload()
            }
          }}
        >
          <h1 className='text-2xl font-bold text-left text-white'>도전! 실버벨 : 홍연길 프로젝트</h1>
          <h3 className='text-sm font-light text-left text-white'>The Silver Bell challenge : Hong Yeon-gil project</h3>
        </S.HeaderLogo>
        <S.MenuButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          {!isMenuOpen ? <AiOutlineMenu /> : <IoMdClose />}
        </S.MenuButton>
      </S.Header>
      <AnimatePresence>{isMenuOpen && <MenuModal />}</AnimatePresence>
    </>
  )
}

export default Header
