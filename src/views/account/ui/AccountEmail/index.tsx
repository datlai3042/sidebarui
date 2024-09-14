import React from 'react'
import MinimizeLayout from '../../../admin/ui/MinimizeLayout'
import step1 from '../../../../assets/images/account_email/step1.svg'
import step2 from '../../../../assets/images/account_email/step2.svg'
import step3 from '../../../../assets/images/account_email/step3.svg'

const AccountEmailCore = () => {
      return (
            <div
                  style={{ padding: 'var(--padding-x-admin-section)' }}
                  className='h-full flex flex-col gap-[4rem] '
            >
                  <div className='text-[1.2rem] opacity-50 font-medium leading-9'>
                        <p>
                              Bằng cách cài đặt tài khoản email cá nhân, bạn có thể dễ dàng thực
                              hiện thao tác gửi mail đến khách hàng, đồng nghiệp,... bằng chính
                              email của mình.
                        </p>

                        <p>
                              1Office đảm bảo rằng tất cả thông tin tài khoản của bạn được lưu dưới
                              dạng mã hóa và chỉ duy nhất bạn có thể sử dụng thông qua việc đăng
                              nhập vào 1Office.
                        </p>
                  </div>
                  <div className='  h-max flex flex-col sm:flex-row justify-center gap-[2rem] sm:gap-0'>
                        <div className='w-full sm:w-[30%] flex items-center flex-col gap-[1.8rem]'>
                              <p className='font-medium text-[1.8rem]'>Bước 1</p>
                              <p className='font-normal text-[1.6rem]'>Cài đặt Email</p>
                              <img src={step1} alt='' className='w-full h-[10rem]' />
                        </div>

                        <div className='w-full sm:w-[30%] flex items-center flex-col gap-[1.8rem]'>
                              <p className='font-medium text-[1.8rem]'>Bước 2</p>
                              <img src={step2} alt='' className='w-full h-[10rem] mt-auto' />
                        </div>

                        <div className='w-full sm:w-[30%] flex items-center flex-col gap-[1.8rem]'>
                              <p className='font-medium text-[1.8rem]'>Bước 3</p>
                              <p className='font-normal text-[1.6rem]'>Sử dụng Email</p>
                              <img src={step3} alt='' className='w-full h-[10rem]' />
                        </div>
                  </div>
                  <div className='flex justify-center mb-[2rem]'>
                        <button className='uppercase rounded-xl bg-[var(--color-theme)] flex items-center justify-center] text-[#fff] p-[.6rem] sm:p-[.8rem_1rem] text-[1.4rem] sm:text-[1.8rem]'>
                              Cài đặt email của bạn
                        </button>
                  </div>
            </div>
      )
}

const AccountEmail = () => {
      return (
            <MinimizeLayout
                  ElementData={<AccountEmailCore />}
                  title='Email gửi đi'
                  heightLayout='53rem'
            />
      )
}

export default AccountEmail
