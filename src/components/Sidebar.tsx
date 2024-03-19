import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { LogOut, X as CloseIcon, Clock, Folder, Trash } from 'lucide-react'
import { useSidebarContext } from '@/store/SidebarContext'
import { subMenuItems } from '@/data/content'

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useSidebarContext()

  return (
    <aside
      className={`bg-muted absolute  top-0 left-0 min-h-screen w-[70vw] sm:relative sm:w-auto px-5 py-8 grid  grid-rows-[min-content,_min-content,_1fr,_max-content] gap-12 transition-all duration-300 ease-in-out sm:ml-0 ${
        showSidebar ? 'ml-[0px] z-10' : '-ml-[2000px]'
      }`}
    >
      <CloseIcon
        className="absolute right-2 top-3 cursor-pointer sm:hidden"
        onClick={toggleSidebar}
      />

      <header>
        <Logo className="items-center first:w-[25px] *:text-[1rem]" />
      </header>

      <Link
        to="/dashboard/upload"
        className="main-action"
        onClick={toggleSidebar}
      >
        upload
      </Link>

      <ul className="flex flex-col gap-2">
        <NavLink
          to="/dashboard/latest"
          className={({ isActive }) =>
            isActive
              ? 'sidebar-links text-white'
              : 'sidebar-links text-gray-300'
          }
          onClick={toggleSidebar}
        >
          <Clock size={22} /> Latest
        </NavLink>
        <NavLink
          to="/dashboard/all-files"
          className={({ isActive }) =>
            isActive
              ? 'py-2 capitalize text-white'
              : 'py-2 capitalize text-gray-300'
          }
          onClick={toggleSidebar}
        >
          <span className="flex gap-2 hover:text-white">
            <Folder size={22} /> All files
          </span>
        </NavLink>
        <ul className="pl-8 flex flex-col gap-2 -mt-2 submenu capitalize">
          {subMenuItems.map((LinkItem) => {
            return (
              <li key={LinkItem.id}>
                <NavLink
                  to={LinkItem.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'sidebar-links text-white'
                      : 'sidebar-links  text-gray-300'
                  }
                  onClick={toggleSidebar}
                >
                  <LinkItem.icon size={22} /> {LinkItem.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <NavLink
          to="/dashboard/trash"
          className={({ isActive }) =>
            isActive
              ? 'sidebar-links text-white'
              : 'sidebar-links  text-gray-300'
          }
          onClick={toggleSidebar}
        >
          <Trash size={22} /> Trash
        </NavLink>
      </ul>

      <footer>
        <button className="flex text-gray-300 gap-2 hover:text-gray-100 transition-all duration-300 ease-in-out">
          <span>
            <LogOut />
          </span>
          Log out
        </button>
      </footer>
    </aside>
  )
}

export default Sidebar
