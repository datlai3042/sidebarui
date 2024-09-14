import { AiFillLike } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa6'
import { LuDot, LuTags } from 'react-icons/lu'
import { MdOutlineAccessTime } from 'react-icons/md'
import MinimizeLayout from '../MinimizeLayout'

type AdminNotification = {
      title: string
      tag?: string
      author: string
      time: string
}

type TProps = {
      data: AdminNotification[]
}

const mockData: AdminNotification[] = [
      {
            author: 'Trần Thị Huệ',
            tag: 'Nội bộ',
            time: '10:13 28/05/2023',
            title: 'CHÁY MÃI TINH THẦN TỰ HÀO: 1OFFICE NHẬN ĐẦU TƯ TỪ TẬP ĐOÀN NHÂN SỰ HÀNG ĐẦU MYNAVI NHẬT BẢN'
      },
      {
            author: 'Admin',
            time: '16:27 20/08/2023',
            title: 'Happy Birthday Trường Giang'
      }
]

const ProposePost = (props: TProps) => {
      const { data } = props

      return (
            <div
                  style={{ padding: 'var(--padding-x-admin-section)' }}
                  className='flex flex-col gap-[2rem]'
            >
                  {data.map((post, index) => (
                        <div
                              style={{ padding: 'var(--padding-x-admin-section)' }}
                              key={post.title + index}
                              className='flex flex-col gap-[1rem] border-[.1rem] border-[#e9e2e2] w-[90%]  min-h-[12rem] rounded-3xl'
                        >
                              <h3 className='font-semibold text-[1.6rem]'>{post.title}</h3>
                              {post.tag && (
                                    <div className='flex items-center gap-[1rem] text-[1.3rem]'>
                                          <LuTags />
                                          <span>{post.tag}</span>
                                    </div>
                              )}
                              <div className='flex flex-col sm:flex-row justify-between gap-[1rem] sm:gap-0'>
                                    <p className='flex flex-col sm:flex-row  flex-wrap sm:gap-[.6rem]'>
                                          <span>Đăng bài</span>
                                          <span className='text-[#fb9258] font-medium'>
                                                {post.author}
                                          </span>
                                    </p>

                                    <div className='flex items-center gap-[.4rem]'>
                                          <MdOutlineAccessTime />

                                          <span>{post.time}</span>
                                    </div>
                              </div>
                              <div className='flex items-center gap-[1rem] mt-[auto] '>
                                    <div className='bg-[var(--bg-primary)] w-[2.4rem] h-[2.4rem] rounded-full flex items-center justify-center'>
                                          <AiFillLike color='#6ab34a' />
                                    </div>

                                    <div className='bg-[var(--bg-primary)] w-[2.4rem] h-[2.4rem] rounded-full flex items-center justify-center'>
                                          <FaHeart color='#bf4c1f' />
                                    </div>

                                    <div className='h-[2.4rem] flex items-center'>
                                          <LuDot />
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

const AdminNotification = () => {
      return (
            <MinimizeLayout
                  ElementData={<ProposePost data={mockData} />}
                  scrollMode={false}
                  title='Thông báo công ty'
                  heightLayout='auto'
            />
      )
}

export default AdminNotification
