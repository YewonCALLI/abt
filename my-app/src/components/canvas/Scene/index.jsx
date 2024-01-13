import * as S from './styles'
import { Suspense, useEffect, useRef, useState } from 'react'
import {
  Cloud,
  Html,
  MapControls,
  OrbitControls,
  OrthographicCamera,
  Preload,
  Shadow,
  Sky,
  useProgress,
} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import SplashScreen from '@/components/dom/SplashScreen'

export const Common = ({ color }) => <>{color && <color attach='background' args={[color]} />}</>

export const Loader = () => {
  const { progress, item, total } = useProgress()

  // const progressFloored = Math.floor(total)

  return (
    <Html center>
      <S.SpinnerCover>
        <SplashScreen />
      </S.SpinnerCover>
    </Html>
  )
}

const PanningLimitControls = ({ ...props }) => {
  const controls = useRef()
  const { camera } = useThree()

  useFrame(() => {
    // 패닝 제한 로직을 여기에 추가
  })

  return <MapControls {...props} ref={controls} args={[camera]} />
}

const Scene = ({ children, orbit, map, ...props }) => {
  return (
    <>
      {/* <fog attach='fog' args={['#000', 10, 20]} /> */}
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
      {orbit && <OrbitControls {...props} />}
      {map && <PanningLimitControls {...props} />}
    </>
  )
}

export default Scene
