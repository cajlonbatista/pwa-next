import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global/global';

import theme from '../global/themes/theme';
import { wrapper } from '../store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
