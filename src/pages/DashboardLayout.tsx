import Sidebar from '@/components/Sidebar'
import { useSidebarContext } from '@/store/SidebarContext'
import { MenuIcon } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  const { showSidebar, toggleSidebar } = useSidebarContext()

  return (
    <div className="grid sm:grid-cols-[260px_1fr] relative">
      <MenuIcon
        className={`absolute top-[10px] left-[10px] z-9 sm:hidden cursor-pointer ${
          showSidebar ? 'hidden' : 'block'
        }`}
        size={24}
        onClick={toggleSidebar}
      />

      <div
        onClick={toggleSidebar}
        className={`bg-[rgba(0,_0,_0,_0.4)] w-screen h-screen absolute top-0 left-0 z-10 sm:hidden ${
          showSidebar ? 'backdrop-blur-sm visible' : 'opacity-0 invisible'
        }`}
      ></div>

      <Sidebar />

      <Outlet />
    </div>
  )
}

export default DashboardLayout
