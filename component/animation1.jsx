import { gsap } from 'gsap'
import { useRef, useLayoutEffect } from 'react'
import  styled  from 'styled-components'

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color:pink;
`

function Animation1 () {
  const boxRef = useRef(null)
  useLayoutEffect(() => {
    let cxt = gsap.context(() => {
      gsap.to(".box", {x: 100, duration: 1})
    }, boxRef)

    return () => { cxt.revert() }
  }, [])

  return (
    <div ref={boxRef}>
      <Box  className="box"></Box>
    </div>
  )
}

export default Animation1