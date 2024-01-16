import { useRef, forwardRef, useImperativeHandle } from 'react'

const Frame = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div {...props} ref={localRef} className='flex flex-col w-full h-full'>
      {children}
    </div>
  )
})
Frame.displayName = 'Frame'

export default Frame
