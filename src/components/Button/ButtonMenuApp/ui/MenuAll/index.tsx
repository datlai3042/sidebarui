import styles from '../../css/buttonMenuApp.module.css'

import MenuWorkPlace from './ui/Workplace'

export const SIZE_ICON = 30


const MenuAll = () => {
      return (
            <div className={styles.menu__all}>
                  <div className={styles['menu-all-wrapper']}>
                        <div className='h-[55rem] flex justify-between overflow-auto'>
                              <MenuWorkPlace />
                              <MenuWorkPlace />
                              <MenuWorkPlace />

                              <MenuWorkPlace />

                        </div>
                  </div>
            </div>
      )
}

export default MenuAll
