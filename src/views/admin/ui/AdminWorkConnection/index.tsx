import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { MdRefresh } from 'react-icons/md'
import { SIZE_ICON } from '../..'
import { AdminWork, ModeFilter } from '../AdminWork'
import TableWork from '../AdminWork/TableWork'
import MinimizeLayout from '../MinimizeLayout'

const mockData: AdminWork[] = [
      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '12/09/2024'
            },
            content: {
                  title: 'test',
                  message: 'Gửi DS từng bạn để đề xuất'
            },
            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      },

      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '12/09/2024'
            },
            content: {
                  title: 'test',
                  message: ' Fill in requirement form/Điền form theo yêu cầu'
            },
            action: [
                  { state: 'pending', content: 'Đang thực hiện' },
                  { state: 'pending', content: 'Đang thực hiện' }
            ]
      },

      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '12/09/2024'
            },
            content: {
                  title: 'test',
                  message: 'Gửi DS từng bạn để đề xuất'
            },

            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      },
      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '11/09/2024'
            },
            content: {
                  title: 'Làm đề nghị tạm ứng đi công tác cho bbb',
                  message: 'Lập đề nghị tạm ứng'
            },

            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      },
      {
            typeWork: {
                  title: 'Phân ca làm việc',
                  time: '10/09/2024'
            },
            content: {
                  title: 'Phân ca cá nhân nhà máy',
                  message: 'Lên yêu cầu đơn hàng	'
            },
            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      },

      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '12/09/2024'
            },
            content: {
                  title: 'test',
                  message: ' Fill in requirement form/Điền form theo yêu cầu'
            },
            action: [
                  { state: 'pending', content: 'Đang thực hiện' },
                  { state: 'pending', content: 'Đang thực hiện' }
            ]
      },

      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '12/09/2024'
            },
            content: {
                  title: 'test',
                  message: 'Gửi DS từng bạn để đề xuất'
            },

            action: [
                  { state: 'pending', content: 'Đang thực hiện' },
                  { state: 'pending', content: 'Đang thực hiện' }
            ]
      },
      {
            typeWork: {
                  title: 'Công việc quy trình',
                  time: '11/09/2024'
            },
            content: {
                  title: 'Làm đề nghị tạm ứng đi công tác cho bbb',
                  message: 'Lập đề nghị tạm ứng'
            },

            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      },
      {
            typeWork: {
                  title: 'Phân ca làm việc',
                  time: '10/09/2024'
            },
            content: {
                  title: 'Phân ca cá nhân nhà máy',
                  message: 'Lên yêu cầu đơn hàng	'
            },
            action: [{ state: 'pending', content: 'Đang thực hiện' }]
      }
]

const AdminConnectionWork = () => {
      const [action, setAction] = useState<ModeFilter>('Filter')

      return (
            <MinimizeLayout
                  title='Việc làm liên quan đến bạn'
                  heightLayout='60rem'
                  IconOther={
                        <>
                              <button
                                    title={'Lọc'}
                                    className='navItem'
                                    onClick={() => setAction('Filter')}
                              >
                                    <CiFilter size={SIZE_ICON} />
                              </button>
                              <button
                                    title={'Tải lại'}
                                    className='navItem'
                                    onClick={() => setAction('Refresh')}
                              >
                                    <MdRefresh size={SIZE_ICON} />
                              </button>
                        </>
                  }
                  ElementData={<TableWork data={mockData} />}
            />
      )
}

export default AdminConnectionWork
