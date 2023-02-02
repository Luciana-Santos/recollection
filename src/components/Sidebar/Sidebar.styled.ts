import styled, { css } from 'styled-components';
import { Menuicon } from '../Header/Header.styled';

interface SidebarProps {
  isSidebarOpen: boolean;
}

export const SidebarStyled = styled.aside<SidebarProps>`
  ${({ theme, isSidebarOpen }) => css`
    background: ${theme.colors.midnightBlue};
    height: 100vh;
    width: 60vw;
    padding-block: 60px;
    padding-inline: 20px;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    position: fixed;
    left: 0;
    margin-left: ${isSidebarOpen ? '0px' : '-1000px'};
    transition: all 0.3s ease;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: ${theme.breakpoints.minWidth.md}) {
      display: block;
      margin-left: 0px;
      position: relative;
      width: initial;
    }
  `}
`;

export const SidebarBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.md}) {
    display: none;
  }
`;

export const CloseMenuIcon = styled(Menuicon)`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 30px;
`;
