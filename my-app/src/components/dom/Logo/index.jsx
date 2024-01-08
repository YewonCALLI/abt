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
      </S.Logo>
    </>
  )
}
