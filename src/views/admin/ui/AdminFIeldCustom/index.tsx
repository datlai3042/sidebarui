import React from 'react'
import MinimizeLayout from '../MinimizeLayout'

const field_list = [
      ['Cơ quan, đơn vị có thẩm quyền quản lý CBCC', 'Cơ quan, đơn vị sử dụng CBCC'],
      ['Nghề nghiệp khi được tuyển dụng', 'Ngày tuyển dụng'],
      ['Cơ quan tuyển dụng', 'Công việc chính được giao'],
      ['Ngạch công chức (viên chức)', 'Mã ngạch'],
      ['Bậc lương', 'Hệ số'],
      ['Ngày hưởng', 'Phụ cấp chức vụ'],
      ['Phụ cấp khác', 'Lý luận chính trị'],
      ['Quản lý nhà nước', 'Ngoại ngữ'],
      ['Tin học', 'Ngày vào Đảng Cộng sản Việt Nam'],
      ['Ngày chính thức vào Đảng', 'Ngày tham gia tổ chức chính trị - xã hội'],
      ['Ngày nhập ngũ', 'Ngày xuất ngũ'],
      ['Quân hàm cao nhất', 'Danh hiệu được phong tặng cao nhất'],
      ['Sở trường công tác', 'Khen thưởng'],
      ['Kỷ luật', 'Là thương binh hạng'],
      ['Là con gia đình chính sách', 'Tên gọi khác'],
      ['Tham gia các tổ chức nào ở nước ngoài', 'Có thân nhân ở nước ngoài'],
      ['Đặc điểm lịch sử bản thân', 'Nhận xét, đánh giá của cơ quan']
]

const AdminField = () => {
      return (
            <div
                  style={{ padding: 'var(--padding-x-admin-section)' }}
                  className='flex flex-wrap gap-[3rem]'
            >
                  {field_list.map((row, index) => (
                        <div key={index} className='w-full flex flex-col sm:flex-row  gap-[3rem]  '>
                              {row.map((field, index) => (
                                    <div
                                          key={field + index}
                                          className='flex flex-col w-full sm:w-[50%] '
                                    >
                                          <span>{field}</span>
                                          <span>--</span>
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      )
}

const AdminFieldCustom = () => {
      return (
            <MinimizeLayout
                  heightLayout='135rem'
                  title='Trường tùy chỉnh'
                  scrollMode={false}
                  ElementData={<AdminField />}
            />
      )
}

export default AdminFieldCustom
