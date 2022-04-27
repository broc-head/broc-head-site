import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

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
          <body className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
  }
};

export default MyDocument