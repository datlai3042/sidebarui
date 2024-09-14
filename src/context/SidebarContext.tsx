import React, { createContext, SetStateAction, useState } from 'react'

export type TSidebarContext = {
      openSidebar: boolean
      setOpenSidebar: React.Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = createContext<TSidebarContext>({
      openSidebar: true,
      setOpenSidebar: () => {}
})

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
      const [openSidebar, setOpenSidebar] = useState<boolean>(true)

   

      return (
            <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
                  {children}
            </SidebarContext.Provider>
      )
}

export default SidebarProvider
