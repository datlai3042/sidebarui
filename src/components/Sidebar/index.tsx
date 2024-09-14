import { useContext } from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { HiOutlineBell } from 'react-icons/hi'
import { RiAccountCircleLine, RiMenu2Fill, RiMenuFill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { SidebarContext } from '../../context/SidebarContext'
import styles from './css/sidebar.module.css'

const SIZE_ICON = 24

const navigateList = [
      {
            title: 'Trang chủ',
            icon: <BiHomeAlt2 size={19} />,
            href: '/'
      },

      {
            title: 'Thông báo',
            icon: <HiOutlineBell size={19} />,
            href: '/notifications'
      },
      {
            title: 'Tài khoản',
            icon: <RiAccountCircleLine size={19} />,
            href: '/account'
      }
]

const SidebarLayout = () => {
      const { openSidebar, setOpenSidebar } = useContext(SidebarContext)

      const navigate = useNavigate()
      const pathName = useLocation().pathname

      const styleEffect = {
            isActive: (path: string) => {
                  return path === pathName ? styles.active : ''
            },
            isActiveColorIcon: (path: string) => {
                  return path === pathName ? '#fff' : ''
            }
      }


      const stateSidebar = openSidebar ? styles['container--large'] : styles['container--small']
 
      return (
            <aside className={`${styles.container} ${stateSidebar}`}>
                  <div className={styles.wrapper}>
                        <div className={styles.sidebar}>
                              <div
                                    className={styles.sidebar__click}
                                    style={{
                                          justifyContent: openSidebar ? 'space-between' : 'center'
                                    }}
                              >
                                    <div onClick={() => setOpenSidebar((prev) => !prev)}>
                                          {openSidebar ? (
                                                <RiMenu2Fill size={SIZE_ICON} />
                                          ) : (
                                                <RiMenuFill size={SIZE_ICON} />
                                          )}
                                    </div>
                                    {openSidebar && (
                                          <img
                                                src={logo}
                                                className={styles.sidebar__logo}
                                                onClick={() => {
                                                      navigate('/')
                                                }}
                                          />
                                    )}
                              </div>

                              <div className={styles.sidebar__navigate}>
                                    {navigateList.map((link, index) => (
                                          <Link
                                                key={link.href + index + link.title}
                                                to={link.href}
                                                className={`${styles.sidebar__link} ${openSidebar ? styles['sidebar__link--sbOpen'] : styles['sidebar__link--sbClose']}`}
                                          >
                                                <div
                                                      className={`${styles.sidebar__icon}  ${styleEffect.isActive(link.href)}`}
                                                >
                                                      {link.icon}
                                                </div>
                                                <span>{link.title}</span>
                                          </Link>
                                    ))}
                              </div>
                        </div>
                  </div>
            </aside>
      )
}

export default SidebarLayout
