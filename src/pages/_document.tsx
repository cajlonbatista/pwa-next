import { Fragment } from 'react';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(
          materialUiSheets.collect(<App {...props} />),
        ),
      });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            <link rel="manifest" href="manifest.json" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
            <title>Orion</title>

            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
}
