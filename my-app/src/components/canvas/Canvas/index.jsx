import { Canvas as R3FCanvas } from '@react-three/fiber'

export const Canvas = (props) => {
  const { children } = props

  return (
    <R3FCanvas
      {...props}
      frameloop='demand'
      orthographic
      camera={{ position: [0, 15, 0], zoom: 70, far: 10000 }}
      dpr={[1, 2]}
      shadows
    >
      {children}
    </R3FCanvas>
  )
}
