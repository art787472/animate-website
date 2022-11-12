import { useEffect } from 'react'
import { gsap } from 'gsap'

function useGsap (cb, ref) {
  useEffect(() => {
    const cxt = gsap.context(cb, ref)

    return () => cxt.revert()

  }, [cb, ref])
}

export default useGsap