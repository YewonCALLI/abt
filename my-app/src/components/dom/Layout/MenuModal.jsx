import * as S from './styles'
import { AiFillInstagram } from 'react-icons/ai'
import React from 'react'

export default function MenuModal() {
  return (
    <S.MenuModal>
      <S.MenuModalContent>
        <S.MenuModalItem>PROJECTS</S.MenuModalItem>
      </S.MenuModalContent>
      <S.MenuModalSNSlist>
        <S.MenuModalSNSitem onClick={() => {}}>
          <AiFillInstagram />
        </S.MenuModalSNSitem>
      </S.MenuModalSNSlist>
    </S.MenuModal>
  )
}
