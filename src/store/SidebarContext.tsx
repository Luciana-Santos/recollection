import { createContext, useContext, useState } from 'react'

type SidebarContext = {
  showSidebar: boolean
  toggleSidebar: () => void
}

type Children = {
  children: React.ReactNode
}

const SidebarContext = createContext({} as SidebarContext)

export default function SidebarProvider({ children }: Children) {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ toggleSidebar, showSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)
