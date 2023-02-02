import { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import { SidebarContext } from '../../store/SidebarContext';
import { Logo, LogoImg } from '../UI/Logo';
import { HeaderStyled, Menuicon } from './Header.styled';
import imgLogo from '/assets/recollection.svg';

const Header = () => {
  const { isSidebarOpen, handleSidebar } = useContext(SidebarContext);

  return (
    <HeaderStyled>
      <Menuicon onClick={handleSidebar}>
        <IoMenu />
      </Menuicon>
      <Logo href="/">
        <LogoImg>
          <img src={imgLogo} alt="Recollection Logo" />
        </LogoImg>
        Recollection
      </Logo>
    </HeaderStyled>
  );
};
export default Header;
