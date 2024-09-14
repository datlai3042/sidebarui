import React, { useState } from 'react'
import MinimizeLayout from '../MinimizeLayout'
import { ModeFilter } from '../AdminWork'
import { CiFilter } from 'react-icons/ci'
import { SIZE_ICON } from '../..'
import { MdRefresh } from 'react-icons/md'
import { SiAmazondocumentdb } from 'react-icons/si'

const AdminPropose = () => {
      const [action, setAction] = useState<ModeFilter>('Filter')

      const ElementData = () => {
            return (
                  <div className=' w-full h-full flex flex-col xl:flex-row justify-center items-center gap-[1rem] text-[var(--sidebar-item-text-color)]'>
                        <SiAmazondocumentdb  size={40}/>
                        <span>Đề xuất của bạn đã được xử lí hết</span>
                  </div>
            )
      }

      return (
            <MinimizeLayout
                  heightLayout='25rem'
                  title='Đề xuất của bạn'
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
                  ElementData={<ElementData />}
            />
      )
}

export default AdminPropose
