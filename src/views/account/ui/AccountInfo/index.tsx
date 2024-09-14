import { HiOutlineLanguage } from 'react-icons/hi2'
import { MdOutlineDraw } from 'react-icons/md'
import { RiAccountCircleLine, RiLockPasswordLine } from 'react-icons/ri'

const SIZE_ICON = 20

const color_theme = [
      '#6f61fe',
      '#fb4d92',
      '#fb4d92',
      '#00b5ef',
      '#88bc00',
      '#fb4945',
      '#c858fa',
      '#00bea1',
      '#ff9a4e'
]

const AccountInfo = () => {
      const changeColorTheme = (color: string) => {
            document.body.style.setProperty('--color-theme', color)
      }

      return (
            <div className='flex flex-col minimize__container'>
                  <div className='minimize__header'>
                        <span className='minimize__title '>Thông tin tài khoản</span>
                  </div>
                  <div
                        style={{ padding: 'var(--padding-x-admin-section)' }}
                        className='flex flex-col gap-[1rem]'
                  >
                        <div className='flex flex-col xl:flex-row gap-[1.2rem] xl:gap-0'>
                              <div className='w-[50%]'>
                                    <div className='h-[3rem] flex items-center gap-[.6rem]'>
                                          <RiAccountCircleLine
                                                size={SIZE_ICON}
                                                className='opacity-30'
                                          />
                                          <span className='truncate'>admin</span>
                                    </div>

                                    <div className='h-[3rem] flex items-center gap-[.6rem]'>
                                          <RiLockPasswordLine
                                                size={SIZE_ICON}
                                                className='opacity-30'
                                          />

                                          <span>******</span>
                                    </div>
                              </div>
                              <div className='w-[50%]'>
                                    <div className='flex flex-col text-[1.4rem]'>
                                          <span className='opacity-50 font-medium'>Ngày tạo</span>
                                          <span>06/10/2016</span>
                                    </div>
                              </div>
                        </div>
                        <p className='opacity-50 font-medium'>
                              Lần đăng nhập gần đây nhất 14/09/2022
                        </p>
                  </div>
                  <div className='minimize__header'>
                        <span className='minimize__title '>Cài đặt chung</span>
                  </div>
                  <div style={{ padding: 'var(--padding-x-admin-section)' }} className='flex flex-wrap gap-[2rem] xl:gap-0'>
                        <div className='w-[50%] flex flex-col gap-[1.4rem]'>
                              <div className='flex gap-[.6rem]'>
                                    <HiOutlineLanguage size={SIZE_ICON} className='opacity-50' />
                                    <span className='font-medium'>Ngôn ngữ</span>
                              </div>
                              <div className='xl:ml-[2rem] flex flex-col xl:flex-row gap-[.8rem]'>
                                    <button className='min-w-[10rem] h-[2.8rem] rounded-full  p-[.8rem] flex items-center justify-center bg-[var(--color-theme)] text-[#fff] font-medium'>
                                          Tiếng Việt
                                    </button>
                                    <button className='min-w-[8rem] h-[2.8rem] rounded-full p-[.8rem] flex items-center justify-center border-[.1rem] border-[var(--color-theme)] font-medium opacity-65'>
                                          English
                                    </button>
                              </div>
                        </div>
                        <div className='flex flex-col gap-[1.4rem]'>
                              <div className='flex gap-[.6rem]'>
                                    <MdOutlineDraw size={SIZE_ICON} className='opacity-50' />
                                    <span className='font-medium'>Đổi màu giao diện</span>
                              </div>
                              <div className='flex flex-wrap gap-[.8rem]'>
                                    {color_theme.map((color) => (
                                          <button
                                          onClick={() => changeColorTheme(color)}
                                                key={color}
                                                style={{ backgroundColor: color }}
                                                className='button-color-theme'
                                          ></button>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AccountInfo
