import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import useClickOutSide from '../../../hooks/useClickOutSide'
import ButtonChat from '../ButtonChat'
import ButtonMenuApp from '../ButtonMenuApp'
import ButtonNotification from '../ButtonNotification'

const ButtonOpenNavigation = () => {
      const { ref, outSide } = useClickOutSide<HTMLButtonElement>()

      const [showModel, setShowModel] = useState<boolean>(false)

      console.log({ outSide })

      useEffect(() => {
            if (outSide) setShowModel(false)
      }, [outSide])

      return (
            <button
                  onClick={() => {
                        setShowModel((prev) => !prev)
                  }}
                  ref={ref}
                  className='block sm:none btn__menuApp border-[.1rem] border-[#e9e9e9] relative'
            >
                  <IoIosArrowDown />
                  {showModel && !outSide && (
                        <div
                              onClick={(e) => e.stopPropagation()}
                              className='absolute top-[140%] left-0 min-w-[16rem] w-max min-h-[10rem] h-max bg-[#fff] z-[2] shadow-lg'
                        >
                              <div className='flex items-center gap-[1rem]'>
                                    <ButtonMenuApp />
                                    <span>Phân hệ</span>
                              </div>
                              <div className='flex items-center gap-[1rem]'>
                                    <ButtonChat />
                                    <span>Chat</span>
                              </div>
                              <div className='flex items-center gap-[1rem]'>
                                    <ButtonNotification />
                                    <span>Thông báo</span>
                              </div>
                        </div>
                  )}
            </button>
      )
}

export default ButtonOpenNavigation
