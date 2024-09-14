import { CiSettings } from 'react-icons/ci'
import Header from '../../components/Header'
import styles from './css/account.module.css'
import AdminFieldCustom from '../admin/ui/AdminFIeldCustom'
import AccountInfo from './ui/AccountInfo'
import AccountEmail from './ui/AccountEmail'
import AccountHistoryIp from './ui/AccountHistoryIp'
import AccountDevice from './ui/AccountDevice'

const AccountPageView = () => {
      return (
            <div>
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

                  <div className={styles.content__container}>
                        <div className='content__wrapper'>
                              <div className='content__left'>
                                    <AccountInfo />
                                    <AccountEmail />
                                    <AdminFieldCustom />
                              </div>
                              <div className='content__right '>
                                    <AccountHistoryIp />
                                    <AccountDevice />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AccountPageView
