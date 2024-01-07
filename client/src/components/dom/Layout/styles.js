import styled from 'styled-components'
import tw from 'twin.macro'
import { MotionModal } from '@/styles/common.styles'

export const Header = styled.div`
  ${tw`
  fixed
  top-0
    w-full
    h-fit
    flex
    flex-row
    justify-between
    text-center 
    z-40
    `}
`

export const HeaderLogo = styled.div`
  ${tw`
  flex 
  flex-col
  justify-center
  items-start
  h-fit
  cursor-pointer
  w-fit
  px-4 
  py-2
  active:opacity-50
  md:hover:opacity-50
  `}
  ${({ isMenuOpen }) => isMenuOpen && tw`opacity-0`}
`

export const MenuButton = styled.div`
  ${tw`
  flex 
  items-center 
  h-full 
  p-4 
  cursor-pointer 
  text-white
  text-2xl
  w-fit
  active:opacity-50
  md:hover:opacity-50
  `}
`
export const MenuModal = styled(MotionModal)`
  ${tw`
  fixed
  z-30 
  w-full 
  h-full 
  flex
  flex-col
  gap-8
  justify-center
  items-center
  bg-black
  bg-opacity-70
  backdrop-blur-sm
  text-black
  py-20
  px-10
  `}
`

export const MenuModalContent = styled.div`
  ${tw`
  flex
  flex-col
  md:flex-row
  w-fit
  h-fit
  gap-4
  justify-center
  items-center
  md:items-start
  `}
`
export const MenuModalItem = styled.div`
  ${tw`
  flex
  flex-row
  justify-center
  items-center
  text-center
  w-full
  px-8
  pt-2
  h-20
  text-white
  text-2xl
  font-semibold
  cursor-pointer
  rounded-full
  active:opacity-50
  md:hover:opacity-50
  `}
`
export const MenuModalItemHidden = styled.p`
  ${tw`
  whitespace-pre
  font-[hel-th]
  hidden
  md:flex
  `}
`

export const MenuModalSNSlist = styled.div`
  ${tw`
w-fit
h-fit
   flex 
   flex-row
    md:gap-6
    gap-10

    `}
`
export const MenuModalSNSitem = styled.div`
  ${tw` 
  w-fit
  h-fit
  flex  
  items-center
  justify-center
  text-white
  text-2xl 
  cursor-pointer
  active:opacity-50
  md:hover:opacity-50
  `}
`
