import { useEffect, useRef, useState } from 'react'

const useClickOutSide = <TypeElementRef extends HTMLElement>() => {
      const refElement = useRef<TypeElementRef>(null)
      const [outSide, setOutSide] = useState<boolean>(false)

      useEffect(() => {
            const handleGlobalClick = (e: MouseEvent) => {
                  console.log('global click', refElement.current?.contains(e.target as Node))
                  if (refElement.current && !refElement.current.contains(e.target as Node)) {
                        setOutSide(true)
                        return
                  }
                  setOutSide(false)
            }

            document.body.addEventListener('click', handleGlobalClick)

            return () => {
                  document.body.removeEventListener('click', handleGlobalClick)
            }
      }, [refElement, outSide])

      return { outSide, ref: refElement, setOutSide }
}

export default useClickOutSide
