import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdOutlineAccessTime } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { SIZE_ICON } from '../..'
import MinimizeLayout from '../MinimizeLayout'

const getNameDateVnmese = (date: number) => {
      let nameDate = ''
      switch (date) {
            case 1: {
                  nameDate = 'Thứ hai'
                  break
            }
            case 2: {
                  nameDate = 'Thứ ba'
                  break
            }
            case 3: {
                  nameDate = 'Thứ tư'
                  break
            }
            case 4: {
                  nameDate = 'Thứ năm'
                  break
            }
            case 5: {
                  nameDate = 'Thứ sáu'
                  break
            }
            case 6: {
                  nameDate = 'Thứ bảy'
                  break
            }
            case 7: {
                  nameDate = 'Chủ nhật'
                  break
            }
      }

      return nameDate
}

const SIZE_ICON_LOCAL = 18

const AdminCalenderMini = () => {
      return (
            <div
                  style={{ padding: 'var(--padding-x-admin-section)' }}
                  className='flex flex-col sm:flex-row h-full gap-[1rem] scroll'
            >
                  <div
                        style={{ padding: 'var(--padding-x-admin-section' }}
                        className='bg-[#fcf0f2] w-full sm:w-[30%] h-full flex flex-col justify-between rounded-lg'
                  >
                        <div className='w-full flex justify-between '>
                              <span className='text-slate-800 text-[1.3rem]'>Giờ vào</span>
                              <RiErrorWarningLine color='#de6a75' size={SIZE_ICON_LOCAL} />
                        </div>
                        <div className='text-[#de6a75]'>--/--</div>
                        <span className='text-[1.4rem] opacity-65'>Chưa check in</span>
                  </div>
                  <div
                        style={{ padding: 'var(--padding-x-admin-section' }}
                        className='bg-[#fdf9ed] w-full sm:w-[30%] h-full flex flex-col justify-between rounded-lg'
                  >
                        <div className='w-full flex justify-between '>
                              <span className='text-slate-800 text-[1.3rem]'>Giờ về</span>
                              <MdOutlineAccessTime color='#f0d89a' size={SIZE_ICON_LOCAL} />
                        </div>
                        <div className='text-[#f0d89a]'>--/--</div>
                        <span className='text-[1.4rem] opacity-65'>Chưa đến giờ</span>
                  </div>
                  <div
                        style={{ padding: 'var(--padding-x-admin-section' }}
                        className='bg-[#e1fdff] w-full sm:w-[25%] h-full flex flex-col items-center justify-between rounded-lg'
                  >
                        <div className='w-full flex justify-center items-center gap-[1rem]'>
                              <MdOutlineAccessTime size={14} />
                              <span>0h00</span>
                        </div>
                        <div className='w-full h-[1.4rem] sm:h-[.8rem] border-[.1rem] border-blue-700 rounded-full'></div>
                        <span className='text-blue-700'>0</span>
                  </div>
            </div>
      )
}

const AdminCalender = () => {
      const time = new Date()
      const day = time.getDate()
      const month = time.getMonth() + 1
      const year = time.getFullYear()
      const date = time.getDay()

      const full_day = `${getNameDateVnmese(date)}, ${day}/${month}/${year}`

      return (
            <>
                  <MinimizeLayout
                        title={full_day}
                        ElementData={<AdminCalenderMini />}
                        heightLayout='25rem'
                        IconOther={
                              <>
                                    <button title={'Tháng trước'} className='navItem'>
                                          <IoIosArrowBack size={SIZE_ICON} />
                                    </button>
                                    <button title={'Tháng kế'} className='navItem'>
                                          <IoIosArrowForward size={SIZE_ICON} />
                                    </button>

                                    <button title={'Mở lịch'} className='navItem'>
                                          <SlCalender size={SIZE_ICON} />
                                    </button>
                              </>
                        }
                  />
            </>
      )
}

export default AdminCalender
