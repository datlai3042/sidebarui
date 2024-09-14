import { useState } from 'react'
import { FaRegWindowMinimize } from 'react-icons/fa6'
import { LiaWindowMinimizeSolid } from 'react-icons/lia'

const SIZE_ICON = 19

type MinimizeLayoutProps = {
      title?: string
      heightLayout?: string
      IconOther?: React.ReactNode
      ElementData: React.ReactNode
      scrollMode?: boolean
}

const MinimizeLayout = (props: MinimizeLayoutProps) => {
      const { title, IconOther, ElementData, scrollMode = true, heightLayout = '50rem'} = props

      const [openContent, setOpenContent] = useState<boolean>(true)


      return (
            <div className={`minimize__container ${scrollMode ? 'scroll max-h-[65rem]' : ''} `}>
                  <div className={'minimize__header'}>
                        <h4 className={'minimize__title max-w-[80%] truncate'}>{title}</h4>
                        <div className={'minimize__action'}>
                              {IconOther && IconOther}
                              <button
                                    title={openContent ? 'Thu gọn' : 'Mở rộng'}
                                    className='navItem'
                                    onClick={() => setOpenContent((prev) => !prev)}
                              >
                                    {openContent ? (
                                          <LiaWindowMinimizeSolid size={SIZE_ICON} />
                                    ) : (
                                          <FaRegWindowMinimize size={16} />
                                    )}
                              </button>
                        </div>
                  </div>
                  <div
                        style={{
                              height: openContent
                                    ? `calc(${heightLayout} - var(--heightMinimizeLayout))`
                                    : '0'
                        }}
                        className={`minimize__wrapper  scroll transition-all duration-200 bg-[#fff]`}
                  >
                        {ElementData}
                  </div>
            </div>
      )
}

export default MinimizeLayout
