import styles from '../../../admin/css/admin.module.css'
import MinimizeLayout from '../../../admin/ui/MinimizeLayout'

const mock_data = [
      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Chưa xác thực',
            ip: '123.20.147.3',
            login: '10:21 16/08/2024',
            logout: '10:22 16/08/2024'
      },

      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Đã xác thực',
            ip: '14.232.245.124',
            login: '10:35 22/05/2024',
            logout: '10:36 22/05/2024'
      },

      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Chưa xác thực',
            ip: '14.187.160.133',
            login: '10:11 08/09/2024',
            logout: '10:11 08/09/2024'
      },

      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Chưa xác thực',
            ip: '113.185.84.38',
            login: '08:45 26/05/2024',
            logout: '10:11 08/09/2024'
      },

      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Chưa xác thực',
            ip: '21.176.35.27',
            login: '23:41 24/06/2024',
            logout: ''
      },

      {
            device: 'ios',
            state_onl: 'offline',
            state_verify: 'Chưa xác thực',
            ip: '125.235.127.71',
            login: '17:41 04/09/2024',
            logout: '17:44 04/09/2024'
      }
]

const AccountDeviceCore = () => {
      return (
            <table className={styles.work__table}>
                  <tbody>
                        <tr className={styles.table__header}>
                              <th className='!w-[10%]'>Thiết bị</th>
                              <th className='!w-[10%] '>Trạng thái</th>
                              <th className='!w-[19%]'>Tình trạng</th>
                              <th className='!w-[15%]'>IP</th>
                              <th className='!w-[15%]'>Truy cập lúc</th>
                              <th className='!w-[15%]'>Đăng xuất lúc</th>
                        </tr>
                        {mock_data.map((row, index) => (
                              <tr
                                    style={{ height: 'max-content' }}
                                    className={`${styles.table__row} `}
                                    key={row.ip + row.logout + index}
                              >
                                          <td className='!border-t-0 !border-l-0'>{row.state_onl}</td>{' '}
                                          <td className='!border-t-0'>{row.device}</td>
                                          <td className='!border-t-0'>{row.state_verify}</td>
                                          <td className='!border-t-0'>{row.ip}</td>
                                          <td className='!border-t-0'>{row.login}</td>
                                          <td className='!border-t-0 !border-r-0'>{row.logout}</td>
                              </tr>
                        ))}
                  </tbody>
            </table>
      )
}

const AccountDevice = () => {
      return (
            <MinimizeLayout
                  ElementData={<AccountDeviceCore />}
                  heightLayout='43rem'
                  title='Thiết bị'
            />
      )
}

export default AccountDevice
