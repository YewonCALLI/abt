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

const PanningLimitControls = ({ targetPosition, ...props }) => {
  const controls = useRef()
  const { camera } = useThree()

  // 패닝 제한 영역의 크기를 정의합니다.
  useFrame(() => {
    // 현재 카메라 위치를 가져옵니다.
    const { x, z } = controls.current.target

    // 카메라 위치가 패닝 제한 영역을 벗어나면 카메라 위치를 패닝 제한 영역 안으로 되돌립니다.
    if (x < -15) {
      controls.current.target.x = -15
    } else if (x > 15) {
      controls.current.target.x = 15
    }
    if (z < -8) {
      controls.current.target.z = -8
    } else if (z > 8) {
      controls.current.target.z = 8
    }

    // controls.current가 null이 아닌 경우에만 update 메소드를 호출합니다.
    controls.current && controls.current.update()
  })

  return <MapControls {...props} ref={controls} args={[camera]} enableZoom={false} target={targetPosition} />
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
      {map && <PanningLimitControls targetPosition={(0, 0, 0)} {...props} />}
    </>
  )
}

export default Scene
