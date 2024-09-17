import { useEffect, useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import useClickOutSide from '../../../hooks/useClickOutSide'
import MenuApp from './ui/MenuApp'

const ButtonMenuApp = () => {
      const [showModel, setShowModel] = useState<boolean>(false)

      const { ref, outSide } = useClickOutSide<HTMLButtonElement>()


      useEffect(() => {
            if (outSide) {
                  setShowModel(false)
                  return
            }
      }, [outSide])

      return (
            <button
                  ref={ref}
                  title={'Phân hệ'}
                  className={`btn__menuApp relative`}
                  onClick={() => {
                        setShowModel((prev) => !prev)
                  }}
            >
                  <BiCategoryAlt size={20} />
                  {showModel && (
                        <>
                              <div className={`overlay`}></div>
                              <div className={`menu__triangle`}></div>
                              <div className={`wrapper__menu`}>
                                    <MenuApp />
                              </div>
                        </>
                  )}
            </button>
      )
}

export default ButtonMenuApp
