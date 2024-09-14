import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { MdRefresh } from 'react-icons/md'
import { SIZE_ICON } from '../..'
import MinimizeLayout from '../MinimizeLayout'
import TableWork from './TableWork'

export type ModeFilter = 'Filter' | 'Refresh'

export type AdminWork = {
      typeWork: {
            title: string
            time?: string
      }
      content: {
            title: string
            message: string
      }
      action: { state: 'pending' | 'success'; content: string }[]
}

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
            action: [{ state: 'success', content: 'Hành động' }]
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
                  { state: 'success', content: 'test' },
                  { state: 'success', content: 'Hành động' }
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
                  { state: 'success', content: 'Khách hàng kí hợp đồng ngay' },
                  { state: 'success', content: 'Khách hàng cần in bản mẫu' }
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

            action: [{ state: 'success', content: 'Phiếu ĐNTU' }]
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
            action: [{ state: 'pending', content: 'Tạo yêu cầu' }]
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
                  { state: 'success', content: 'test' },
                  { state: 'success', content: 'Hành động' }
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
                  { state: 'success', content: 'Khách hàng kí hợp đồng ngay' },
                  { state: 'success', content: 'Khách hàng cần in bản mẫu' }
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

            action: [{ state: 'success', content: 'Phiếu ĐNTU' }]
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
            action: [{ state: 'pending', content: 'Tạo yêu cầu' }]
      }
]

const AdminWorkNeed = () => {
      const [action, setAction] = useState<ModeFilter>('Filter')

      return (
            <MinimizeLayout
                  title='Việc cần làm'
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

export default AdminWorkNeed
