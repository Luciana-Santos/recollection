import { Clock, X as CloseIcon, Folder, LogOut, Trash2 } from 'lucide-react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { subMenuItems } from '../data/content'

type Sidebar = {
  isOpen: boolean
  onOpen: () => void
}

function Sidebar({ isOpen, onOpen }: Sidebar) {
  return (
    <aside
      className={`overflow-scroll bg-muted absolute top-0 left-0 min-h-screen md:max-h-screen w-[70vw] sm:relative sm:w-auto px-5 py-8 grid  grid-rows-[min-content,_min-content,_1fr,_max-content] gap-12 transition-all duration-300 ease-in-out sm:ml-0 main-content-scroll ${
        isOpen ? 'ml-[0px] z-10' : '-ml-[2000px]'
      }`}
    >
      <CloseIcon
        className="absolute right-2 top-3 cursor-pointer sm:hidden"
        onClick={onOpen}
      />

      <header>
        <Logo className="items-center first:w-[25px] *:text-[1rem]" />
      </header>

      <Link to="/upload" className="main-action" onClick={onOpen}>
        upload
      </Link>

      <ul className="flex flex-col gap-2">
        <NavLink
          to="/recents"
          className={({ isActive }) =>
            isActive
              ? 'sidebar-links text-white'
              : 'sidebar-links text-gray-300'
          }
          onClick={onOpen}
        >
          <Clock size={22} /> Recents
        </NavLink>
        <NavLink
          to="/all-files"
          className={({ isActive }) =>
            isActive
              ? 'py-2 capitalize text-white'
              : 'py-2 capitalize text-gray-300'
          }
          onClick={onOpen}
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
                  onClick={onOpen}
                >
                  <LinkItem.icon size={22} /> {LinkItem.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive
              ? 'sidebar-links text-white'
              : 'sidebar-links  text-gray-300'
          }
          onClick={onOpen}
        >
          <Trash2 size={22} /> Trash
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
