import styles from '../../css/admin.module.css'
import AdminCalender from '../AdminCalender'
import AdminFieldCustom from '../AdminFIeldCustom'
import AdminNotification from '../AdminNotification'
import AdminPropose from '../AdminPropose'
import AdminWorkNeed from '../AdminWork'
import AdminConnectionWork from '../AdminWorkConnection'

const AdminContent = () => {
      return (
            <div className={styles.content__wrapper}>
                  <div className={styles.content__left}>
                        <AdminWorkNeed />
                        <AdminPropose />
                        <AdminConnectionWork />
                        <AdminFieldCustom />
                  </div>
                  <div className={styles.content__right}>
                        <AdminCalender />
                        <AdminNotification />
                  </div>
            </div>
      )
}

export default AdminContent
