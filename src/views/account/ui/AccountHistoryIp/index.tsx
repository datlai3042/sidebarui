import { FaGoogle } from 'react-icons/fa6'
import MinimizeLayout from '../../../admin/ui/MinimizeLayout'

const mock_ip = [
      { ip: 'Ip: 171.250.162.115', time: '09:54, 14/09/2024' },
      { ip: 'Ip: 14.162.159.125', time: '09:21, 14/09/2024' },
      { ip: 'Ip: 14.162.159.125', time: '08:36, 14/09/2024' },
      { ip: 'Ip: 171.242.4.150', time: '08:31, 14/09/2024' },
      { ip: 'Ip: 171.239.161.182', time: '08:14, 14/09/2024' },
      { ip: 'Ip: 171.250.162.115', time: '22:50, 13/09/2024' },
      { ip: 'Ip: 100.111.78.6', time: '22:26, 13/09/2024' },
      { ip: 'Ip: 14.162.159.125', time: '22:08, 13/09/2024' },
      { ip: 'Ip: 14.162.159.125', time: '21:41, 13/09/2024' }
]

const AccountHistoryIpCore = () => {
      return (
            <div className='flex flex-col'>
                  {mock_ip.map((ip) => (
                        <div
                              style={{ padding: 'var(--padding-x-admin-section)' }}
                              className='h-[8rem] sm:h-[5rem] flex flex-col sm:flex-row justify-between  border-[.1rem] border-[#efeeeecc]'
                        >
                              <div className='flex items-center gap-[1rem]'>
                                    <FaGoogle />
                                    <span>{ip.ip}</span>
                              </div>
                              <span className='ml-[2rem] sm:ml-0'>{ip.time}</span>
                        </div>
                  ))}
            </div>
      )
}

export const AccountHistoryIp = () => {
      return (
            <MinimizeLayout
                  ElementData={<AccountHistoryIpCore />}
                  heightLayout='55rem'
                  title='Lịch sử truy cập'
            />
      )
}

export default AccountHistoryIp
