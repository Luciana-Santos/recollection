import { Link } from 'react-router-dom'
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

      <Link to="/upload" className="main-action">
        upload
      </Link>

      <ul className="flex flex-col gap-2">
        <Link to="/dashboard/latest" className="sidebar-links">
          <Clock /> Latest
        </Link>
        <Link
          to="/dashboard/all-files"
          className="py-2 capitalize text-gray-300 hover:text-gray-100"
        >
          <span className="flex gap-2">
            <Folder /> All files
          </span>
          <ul className="pl-8 flex flex-col gap-2 mt-2 submenu capitalize">
            {subMenuItems.map((LinkItem) => {
              return (
                <li key={LinkItem.id}>
                  <Link to={LinkItem.path} className="sidebar-links">
                    <LinkItem.icon size={22} /> {LinkItem.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Link>
        <Link to="/dashboard/trash" className="sidebar-links">
          <Trash /> Trash
        </Link>
      </ul>

      <footer>
        <button className="flex gap-2 hover:text-secondary transition-all duration-300 ease-in-out">
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
