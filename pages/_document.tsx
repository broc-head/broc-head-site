import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { stringify } from 'querystring';

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme');
    const hasExplicitPreference = typeof preference === 'string';
    //if user has dark or light chosen, use it
    if (hasExplicitPreference) {
      return preference;
    }
    //no saved pref, use a media query
    const mediaQuery = "("

  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  };
  render() {
    return (
        <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" /> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,900;1,400;1,900&family=Raleway:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
          </Head>
          <body className=''>
            <script
              dangerouslySetInnerHtml={{
                __html: customScript,
              }}
            ></script>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
  }
};

const customScript = `
            console.log("Our custom script runs!);
`;

export default MyDocument