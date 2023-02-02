import styled from 'styled-components';

export const Logo = styled.a`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: max-content;
  color: ${({ theme }) => theme.colors.lavender};
`;

export const LogoImg = styled.span`
  img {
    height: 40px;
    width: 40px;
  }
`;
