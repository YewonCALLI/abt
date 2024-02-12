//Logo component
import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export function Logo({ ...props }) {
  return (
    <>
      <S.Logo {...props}>
        <Image src='/img/logo.png' width={50} height={40} />
        <span className='text-sm text-white'>© 2024 ABT team </span>
        <div className='text-white gap-2 justify-end md:justify-center items-center flex flex-col md:flex-row text-xs'>
          <p>기획 | 최은총</p>
          <p>작가 | 도재인, 임은정, 장예원</p>
          <p>협력 | 오세진</p>
        </div>
      </S.Logo>
    </>
  )
}
