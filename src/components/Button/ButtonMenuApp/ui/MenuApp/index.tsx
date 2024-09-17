import { useEffect, useState } from 'react'
import styles from '../../css/buttonMenuApp.module.css'
import MenuAll from '../MenuAll'
import MenuUseFul from '../MenuUseFul'

type MenuAppMode = 'UseFull' | 'All'

const MenuApp = () => {
      const [mode, setMode] = useState<MenuAppMode>('All')

      const styleEffect = {
            isActive: (btnMode: MenuAppMode) =>
                  mode === btnMode ? styles['menu__mode--active'] : ''
      }

      useEffect(() => {
            document.body.style.overflow = 'hidden'

            return () => {
                  document.body.style.overflow = 'auto'
            }
      }, [])

      return (
            <div className={`${styles.container__menu}`} onClick={(e) => e.stopPropagation()}>
                  <div className='flex justify-start gap-[1.8rem] px-[2rem] text-[1.4rem] border-[.1rem] border-[#e9e9e9] rounded-tl-[var(--borderRadiusMenuApp)] rounded-tr-[var(--borderRadiusMenuApp)]'>
                        <button
                              className={`${styleEffect.isActive('UseFull')} ${styles.menu__btn} `}
                              onClick={() => setMode('UseFull')}
                        >
                              Hay dùng
                        </button>
                        <button
                              className={`${styleEffect.isActive('All')} ${styles.menu__btn}`}
                              onClick={() => setMode('All')}
                        >
                              Tất cả
                        </button>
                  </div>
                  <div className='flex-1 flex items-stretch text-slate-700'>
                        {mode === 'All' ? <MenuAll /> : <MenuUseFul />}
                  </div>
            </div>
      )
}

export default MenuApp
