import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  grid-column: 2 / -1;
`;

export const Menuicon = styled.span`
  cursor: pointer;
  font-size: 30px;
  display: grid;
  place-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.md}) {
    display: none;
  }
`;
