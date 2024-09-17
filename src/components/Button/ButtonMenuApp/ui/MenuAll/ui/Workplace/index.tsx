import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaEarthAmericas } from 'react-icons/fa6'
import { FcProcess } from 'react-icons/fc'
import { IoMdCheckmark } from 'react-icons/io'
import { IoCalendarOutline } from 'react-icons/io5'
import { PiBookOpenText } from 'react-icons/pi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { TiDocumentText } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const SIZE_ICON = 18

const menu_workplace = [
      {
            icon: <FaEarthAmericas color='rgb(32, 175, 255)' size={SIZE_ICON} />,
            title: 'Mạng nội bộ',
            desc: 'Truyền thông và văn hóa doanh nghiệp',
            href: '/social',
            bg: 'rgb(32 175 255 / 8%)'
      },
      {
            icon: <PiBookOpenText color='rgb(110, 98, 255)' size={SIZE_ICON} />,
            title: 'Tài liệu',
            desc: 'Lưu trữ, chia sẽ và quản lí tài liệu',
            href: '/document',
            bg: 'rgb(110 98 255 / 8%)'
      },
      {
            icon: <RiShoppingBagLine color='rgb(32, 175, 255)' size={SIZE_ICON} />,
            title: 'Công việc',
            desc: 'Giao việc, giám sát và đánh giá kết quả',
            href: '/work',
            bg: 'rgb(32 175 255 / 8%)'
      },

      {
            icon: <AiOutlineFundProjectionScreen color='rgb(21, 200, 114)' size={SIZE_ICON} />,
            title: 'Dự án',
            desc: 'Quản lí tiến độ, nhân lực và dòng tiền dự án',
            href: '/work-project-project',
            bg: 'rgb(21 200 114 / 8%)'
      },

      {
            icon: <FcProcess color='rgb(251, 175, 26)' size={SIZE_ICON} />,
            title: 'Quy trình',
            desc: 'Số và tự động hóa 100% quy trình',
            href: '/work-process-process',
            bg: 'rgb(251 175 26 / 8%)'
      },

      {
            icon: <TiDocumentText color='rgb(21, 200, 114)' size={SIZE_ICON} />,
            title: 'Văn bản',
            desc: 'Quản lí công văn đi, đến, nội bộ',
            href: '/diploma',
            bg: 'rgb(21 200 114 / 8%)'
      },

      {
            icon: <IoCalendarOutline color='rgb(242, 65, 65)' size={SIZE_ICON} />,
            title: 'Lịch biểu',
            desc: 'Lịch làm việc công ty, phòng ban',
            href: '/calendar',
            bg: 'rgb(242 65 65 / 8%)'
      },

      {
            icon: <IoCalendarOutline color='rgb(110, 98, 255)' size={SIZE_ICON} />,
            title: 'Ký số',
            desc: 'Quy trình tạo hồ sơ, trình và ký số',
            href: '/digitalsignature',
            bg: 'rgb(110 98 255 / 8%)'
      },
]

const MenuWorkPlace = () => {
      return (
            <div className={'menu-all-section px-[.6rem] snap-center'}>
                  <p className='title'>WORKPLACE</p>
                  {menu_workplace.map((nav) => (
                        <Link to={nav.href} key={nav.href + nav.title}>
                              <div className={'icon'} style={{ backgroundColor: nav.bg }}>
                                    {nav.icon}
                              </div>
                              <div className={'content'}>
                                    <h4 className='content-title'>{nav.title}</h4>
                                    <span className='content-desc'>{nav.desc}</span>
                              </div>
                              <div className='check'>
                                    <IoMdCheckmark />
                              </div>
                        </Link>
                  ))}
            </div>
      )
}

export default MenuWorkPlace
