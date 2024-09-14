import SidebarLayout from './components/Sidebar'
import './App.css'
import { useContext } from 'react'
import { SidebarContext } from './context/SidebarContext'

const App = ({ children }: { children: React.ReactNode }) => {
      const { openSidebar } = useContext(SidebarContext)

      const stateSidebar = openSidebar ? 'right-layout-small' : 'right-layout-large'

      return (
            <main id='main'>
                  <SidebarLayout />
                  <div
                        className={`right-layout ${openSidebar ? 'sidebar-show' : ''} ${stateSidebar}`}
                  >
                        {children}
                  </div>
            </main>
      )
}

export default App
