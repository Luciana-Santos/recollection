import { ThemeProvider } from 'styled-components';
import Content from './components/Content/Content';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
