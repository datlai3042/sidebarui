import { useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Header from '../../components/Header'
import { SidebarContext } from '../../context/SidebarContext'
import styles from './css/notification.module.css'
import logo from '../../assets/images/logo_simple.png'

export type TNotification =
      | 'All'
      | 'Work'
      | 'Apply'
      | 'Ticket'
      | 'SettingNotification'
      | 'SettingNotificationCommon'

const notificationTypeList: { content: string; value: TNotification }[] = [
      { content: 'Tất cả', value: 'All' },
      { content: 'Công việc', value: 'Work' },
      { content: 'Duyệt', value: 'Apply' },
      { content: 'Ticket', value: 'Ticket' },
      { content: 'Cài đặt thông báo chung', value: 'SettingNotification' },
      { content: 'Cài đặt thông báo cho từng đối tượng', value: 'SettingNotificationCommon' }
]

export type TNotificationState = 'All' | 'UnRead' | 'Readed' | 'Merge'

const notificationStateList: { content: string; value: TNotificationState }[] = [
      { content: 'Tất cả', value: 'All' },
      { content: 'Chưa đọc', value: 'UnRead' },
      { content: 'Đã đọc', value: 'Readed' },
      { content: 'Gộp', value: 'Merge' }
]

const notificationList = [
      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },
      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },
      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },

      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },
      {
            system_message: 'Bạn có một thông báo trong quy trình',
            message: 'Nhắc nhở chấm công tự động.',
            content: 'Nhớ kiểm tra công làm việc trước khi về nha anh chị ơi',
            time: '5 giờ trước'
      },
      
]

const NotificationPageView = () => {
      const { openSidebar } = useContext(SidebarContext)

      const [notificationType, setNotificationType] = useState<TNotification>('All')
      const [notificationState, setNotificationState] = useState<TNotificationState>('All')

      const stateSidebar = openSidebar ? styles['container--small'] : styles['container--large']

      return (
            <div>
                  <Header
                        children={
                              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                                    <h3 className='font-semibold text-[1.5rem]'>Hộp thông báo</h3>
                                    <div className='navItem'>
                                          <FiSearch size={17} />
                                    </div>
                              </div>
                        }
                  />
                  <div className={`${styles.container} ${stateSidebar} scroll xl:justify-between`}>
                        <div className={`${styles.notification__type} w-max hidden xl:flex`}>
                              {notificationTypeList.map((noti, index) => (
                                    <div
                                          key={noti.content + index}
                                          className='hover:cursor-pointer relative h-[100%] flex items-center'
                                          onClick={() => setNotificationType(noti.value)}
                                    >
                                          {noti.content}

                                          {noti.value === notificationType && (
                                                <div className='absolute bottom-[0rem] bg-[var(--color-theme)] w-full h-[.2rem]'></div>
                                          )}
                                    </div>
                              ))}
                        </div>
                        <div className='flex items-center xl:justify-center gap-[1rem] '>
                              {notificationStateList.map((noti, index) => (
                                    <button
                                          className={`${noti.value === notificationState ? 'bg-[var(--bg-item-hover)] text-[var(--color-theme)]' : 'bg-[#f9f9f9] text-[var(--sidebar-item-text-color)] hover:bg-[var(--bg-item-hover)] hover:text-[var(--color-theme)]'}  rounded-[999px] min-w-[8rem] h-[3rem]`}
                                          key={noti.value + index}
                                          onClick={() => setNotificationState(noti.value)}
                                    >
                                          {noti.content}
                                    </button>
                              ))}
                        </div>
                  </div>
                  <div
                        style={{
                              paddingTop:
                                    'calc(var(--heightHeader) + var(--heightHeader) + var(--space-admin-page-content))'
                        }}
                        className='w-full'
                  >
                        <p className='minimize__header font-medium '>Hôm nay</p>
                        <div className='w-full h-max  bg-[#fff] flex flex-col gap-[2rem] p-[var(--padding-x-admin-section)]'>
                              {notificationList.map((noti, index) => (
                                    <div key={noti.content + index} className='flex gap-[1rem] text-[#717b82] text-[1.37rem] font-normal'>
                                          <img src={logo} alt='' className='w-[5rem] h-[5rem]'/>
                                          <div className=''>
                                                <p>
                                                      <span>{noti.system_message} </span>
                                                      <span className='font-medium text-black'>{noti.message}</span>
                                                </p>
                                                <p>Nội dung: {noti.content}</p>
                                                <span className='text-[1.2rem]'>{noti.time}</span>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default NotificationPageView
