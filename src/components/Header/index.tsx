import React, { useContext } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { GoCommentDiscussion } from 'react-icons/go'
import { HiOutlineBell } from 'react-icons/hi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import headerLogo from '../../assets/images/logo_simple.png'
import { SidebarContext } from '../../context/SidebarContext'
import styles from './css/header.module.css'
import HeaderActionItem from './ui/action'

const nav_list = [
      {
            title: 'Trang cá nhân',
            icon: <MdOutlineKeyboardArrowDown size={20} />
      },
      { title: 'Phân Hệ', icon: <BiCategoryAlt size={20} /> },
      { title: '', icon: <GoCommentDiscussion size={20} /> },
      { title: 'Thông báo', icon: <HiOutlineBell size={20} /> }
]

const SIZE_ICON = 18

const Header = ({ children }: { children: React.ReactNode }) => {
      const { openSidebar } = useContext(SidebarContext)

      const stateSidebar = openSidebar ? styles['container--small'] : styles['container--large']

      return (
            <header className={`${styles.container} ${stateSidebar} scroll`}>
                  <div className={` hidden sm:block`}>{children}</div>
                  <div className={`${styles.header__right}`}>
                        <button className='min-w-[9.2rem] h-[3.6rem] text-[var(--color-theme)] text-[1.5rem] rounded-xl border-[.1rem] border-[var(--color-theme)] flex justify-center items-center gap-[.4rem]'>
                              <span>Lối tắt</span>
                              <MdOutlineKeyboardArrowDown size={SIZE_ICON} />
                        </button>
                        {nav_list.map((nav, index) => (
                              <HeaderActionItem
                                    title={nav.title}
                                    icon={nav.icon}
                                    key={index}
                              />
                        ))}
                        <div className='w-[4rem] h-[4rem] hover:border-[.3rem] hover:border-[var(--color-theme)] flex justify-center items-center rounded-full'>
                              <img src={headerLogo} className='w-[90%] h-[90%] rounded-full' />
                        </div>
                  </div>
            </header>
      )
}

export default Header
