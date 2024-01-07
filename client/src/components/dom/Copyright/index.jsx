import React from 'react'
import * as S from './styles'

export function Copyright({ ...props }) {
  return (
    <>
      <S.Copyright {...props}>
        <span className='text-xs text-white'>주최/주관 | 토탈미술관</span>
        <span className='text-xs text-white'>공동주관 | 아터테인, 예술공간 의식주</span>
        <span className='text-xs text-white'>후원 | 한국문화예술위원회</span>
      </S.Copyright>
    </>
  )
}
