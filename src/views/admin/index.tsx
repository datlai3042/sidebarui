import { CiSettings } from 'react-icons/ci'
import Header from '../../components/Header'
import styles from './css/admin.module.css'
import AdminContent from './ui/AdminContent'

export const SIZE_ICON = 19

const AdminPageView = () => {
      return (
            <>
                  <Header
                        children={
                              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                                    <h3 className='font-semibold text-[1.7rem]'>Admin</h3>
                                    <CiSettings
                                          className='hover:text-[var(--color-theme)]'
                                          size={17}
                                    />
                              </div>
                        }
                  />
                  <div className={`${styles.content__container} pb-[4rem]`} >
                        <AdminContent />
                  </div>
            </>
      )
}

export default AdminPageView
