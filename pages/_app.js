import Head from 'next/head' //use instead of head
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'
import "@/styles/globals.css";

export const GlobalStyle = createGlobalStyle`
  * 
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Motomapper</title>
          <meta name='description' content='Put a description here about your app'/>
          <meta name='robots' content='index, follow'/>
          <link rel="apple-touch-icon" sizes="180x180" href="public/favicon.ico"/>
          <link rel="icon" type="image/png" sizes="32x32" href="public/favicon.ico"/>
          <link rel="icon" type="image/png" sizes="16x16" href="public/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <GlobalStyle />

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
