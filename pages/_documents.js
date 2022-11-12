import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}