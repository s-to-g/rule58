import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import sv from 'assets/lang/sv';
import favIcon from 'assets/images/favicon.ico';
import favIcon16 from '../favicon-16x16.png';
import favIcon32 from '../favicon-32x32.png';
import appleTouchIcon from '../apple-touch-icon.png';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="sv">
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content={sv.app.desc} />
          <link rel="icon" type="image/x-icon" href={favIcon} />
          <link
            href="https://fonts.googleapis.com/css?family=Karla&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
