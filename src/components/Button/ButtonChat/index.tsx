import { useEffect, useState } from 'react'
import { GoCommentDiscussion } from 'react-icons/go'
import useClickOutSide from '../../../hooks/useClickOutSide'

const ButtonChat = () => {
      const { ref, outSide } = useClickOutSide<HTMLButtonElement>()

      const [showModel, setShowModel] = useState<boolean>(false)

      useEffect(() => {
            if (outSide) {
                  setShowModel(false)
                  return
            }
      }, [outSide])

      return (
            <button
                  ref={ref}
                  title={'Chat'}
                  className={`btn__menuApp relative`}
                  onClick={() => {
                        setShowModel((prev) => !prev)
                  }}
            >
                  <GoCommentDiscussion size={20} />

                  {showModel && (
                        <>
                              <div className={`overlay`}></div>
                              <div className={`menu__triangle`}></div>
                              <div style={{right: '-5rem'}} className={`wrapper__menu`} onClick={(e) => e.stopPropagation()}>
                                    {/* <MenuApp /> */}

                                    <div className='w-[30rem] h-[20rem] bg-[#fff] rounded-[var(--borderRadiusMenuApp)] flex justify-center items-center text-[#000]'>
                                          Chat
                                    </div>
                              </div>
                        </>
                  )}
            </button>
      )
}

export default ButtonChat
