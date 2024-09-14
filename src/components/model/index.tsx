import React, { SetStateAction } from 'react'
import { createPortal } from 'react-dom'
import { IoCloseSharp } from 'react-icons/io5'
import styles from './css/model.module.css'

export const Portal = ({ children }: { children: React.ReactNode }) => {
      return createPortal(children, document.body)
}

export const ModelTemplate = () => {
      return <div className=''>Test</div>
}

type ModelContainerProps = {
      children: React.ReactNode
      center?: boolean
      setShowModel?: React.Dispatch<SetStateAction<boolean>>
}

export const ModelContainer = (props: ModelContainerProps) => {
      const { children, center = false } = props

      const styleEffect = {
            setCenterModel: () => {
                  return center ? 'flex items-center justify-center' : ''
            }
      }

      return (
            <div className={styles.container}>
                  <div className={`${styles.wrapper} ${styleEffect.setCenterModel()}`}>
                        <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
                              {children}
                        </div>
                        <button
                              className={styles.close}
                              onClick={() => {
                                    // setShowModel(false)
                              }}
                        >
                              <span>Đóng</span>
                              <IoCloseSharp />
                        </button>
                        <div className={styles.model__core}></div>
                  </div>
            </div>
      )
}
