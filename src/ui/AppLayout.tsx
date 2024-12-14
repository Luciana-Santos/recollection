import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import Sidebar from './Sidebar'

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  return (
    <div className="grid sm:grid-cols-[260px_1fr] relative">
      <MenuIcon
        className={`absolute top-[20px] left-[30px] z-9 sm:hidden cursor-pointer ${
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

      <Sidebar onOpen={toggleSidebar} isOpen={showSidebar} />

      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default AppLayout
