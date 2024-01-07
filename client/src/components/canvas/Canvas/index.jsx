import { Canvas as R3FCanvas } from '@react-three/fiber'

export const Canvas = (props) => {
  const { children } = props

  return (
    <R3FCanvas
      {...props}
      //top view camera
      camera={{ position: [0, 10, 0], near: 0.01, far: 1000 }}
      // camera={{ position: [0, 10, 0] }}
      dpr={[1, 2]}
      shadows
    >
      {children}
    </R3FCanvas>
  )
}
