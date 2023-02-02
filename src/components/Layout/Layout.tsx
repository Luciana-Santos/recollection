import { LayoutStyled } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
export default Layout;
