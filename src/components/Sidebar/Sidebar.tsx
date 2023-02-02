import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { SidebarContext } from '../../store/SidebarContext';
import {
  CloseMenuIcon,
  SidebarBackdrop,
  SidebarStyled,
} from './Sidebar.styled';

const Sidebar = () => {
  const { isSidebarOpen, handleSidebar } = useContext(SidebarContext);

  return (
    <>
      {isSidebarOpen ? <SidebarBackdrop onClick={handleSidebar} /> : null}
      <SidebarStyled isSidebarOpen={isSidebarOpen}>
        <CloseMenuIcon onClick={handleSidebar}>
          <IoClose />
        </CloseMenuIcon>
        links
      </SidebarStyled>
    </>
  );
};

export default Sidebar;
