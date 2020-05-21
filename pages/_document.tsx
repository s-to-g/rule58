import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import ogImage from 'assets/images/og.png';
import favIcon from '../favicon.ico';
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
      <Html lang="sv" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Karla&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href={favIcon} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
          <meta property="og:title" content="Rule 85 Bike Shop" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.rule58.se" />
          <meta property="og:image" content={ogImage} />
          <meta name="robots" content="INDEX FOLLOW" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
