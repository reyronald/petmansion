import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>
          <title>Pet Mansion</title>

          <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
          <meta name="application-name" content="Pet Mansion" />
          <meta
            name="description"
            content="Hotel y peluquería para perros libre de jaulas en Santo Domingo, República Dominicana"
          ></meta>

          <link rel="icon" href="/branding/dog face small.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
