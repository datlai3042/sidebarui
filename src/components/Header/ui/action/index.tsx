import { SetStateAction, useState } from 'react'
import styles from '../../css/header.module.css'

type HeaderActionItem = {
      title: string
      icon: React.ReactNode
      Model?: React.ComponentType<{ setShowModel: React.Dispatch<SetStateAction<boolean>> }>
}

const HeaderActionItem = (props: HeaderActionItem) => {
      const { title, icon, Model } = props

      const [showModel, setShowModel] = useState<boolean>(false)

      return (
            <>
                  <button
                        title={title}
                        key={title}
                        className={`${styles.header__navItem} relative`}
                        onClick={() => {
                              if (Model) {
                                    setShowModel((prev) => !prev)
                              }
                        }}
                  >
                        {icon}
                        {Model && showModel && (
                              <Model setShowModel={setShowModel} />
                              // <ModelContainer setShowModel={setShowModel} children={<p>1</p>} />
                        )}
                  </button>
            </>
      )
}

export default HeaderActionItem
