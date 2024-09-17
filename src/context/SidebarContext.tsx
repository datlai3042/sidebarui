import React, { createContext, SetStateAction, useState } from 'react'

export type TSidebarContext = {
      openSidebar: boolean
      setOpenSidebar: React.Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = createContext<TSidebarContext>({
      openSidebar: false,
      setOpenSidebar: () => {}
})

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
      const [openSidebar, setOpenSidebar] = useState<boolean>(false)

   

      return (
            <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
                  {children}
            </SidebarContext.Provider>
      )
}

export default SidebarProvider
