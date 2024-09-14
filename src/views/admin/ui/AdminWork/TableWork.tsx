import { CiPlay1 } from 'react-icons/ci'
import { AdminWork } from '.'
import styles from '../../css/admin.module.css'

import logo from '../../../../assets/images/logo_simple.png'

type TableWorkProps = {
      data: AdminWork[]
}

const TableWork = (props: TableWorkProps) => {
      const { data } = props

      return (
            <div className={styles.work__core}>
                  <table className={styles.work__table}>
                        <tbody>
                              <tr className={styles.table__header}>
                                    <th className=''>Loại công việc</th>
                                    <th>Nội dung công việc</th>
                                    <th>Hành Động</th>
                                    <th>Người liên qua</th>
                              </tr>

                              {data.map((work, index) => (
                                    <tr
                                          className={styles.table__row}
                                          key={work.content.title + index}
                                    >
                                          <td>
                                                <div className='flex flex-col justify-center'>
                                                      <span className='font-medium text-slate-900 leading-relaxed'>
                                                            {work.typeWork.title}
                                                      </span>
                                                      {work.typeWork.time && (
                                                            <span className='opacity-50 text-[1.2rem]'>
                                                                  {work.typeWork.time}
                                                            </span>
                                                      )}
                                                </div>
                                          </td>
                                          <td>
                                                <div className='flex flex-col justify-center'>
                                                      <span className='text-[1.3rem] font-medium'>
                                                            {work.content.title}
                                                      </span>
                                                      <span className='ml-[1rem] text-[1.3rem]'>
                                                            {work.content.message}
                                                      </span>
                                                </div>
                                          </td>
                                          <td>
                                                <div className='flex items-center  gap-[1rem] text-blue-600'>
                                                      {work.action[0].state === 'success' && (
                                                            <>
                                                                  <div className='min-w-[2rem]'>
                                                                        <CiPlay1 size={20} />
                                                                  </div>
                                                                  <span>
                                                                        {work.action[0].content}
                                                                  </span>
                                                            </>
                                                      )}

                                                      {work.action[0].state === 'pending' && (
                                                            <>
                                                                  <span className='min-w-[10rem] min-h-[3rem] inline p-[.4rem_1rem] flex justify-center items-center border-[.1rem] border-blue-600 bg-blue-100 rounded-full '>
                                                                        {work.action[0].content}
                                                                  </span>
                                                            </>
                                                      )}
                                                </div>
                                          </td>
                                          <td>
                                                <img
                                                      src={logo}
                                                      alt=''
                                                      className='w-[4rem] h-[4rem] rounded-full'
                                                />
                                          </td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      )
}

export default TableWork
