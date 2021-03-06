import Head from 'next/head'
import '@styles/tailwind.css'
import { ThemeContextProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {process.env.NEXT_PUBLIC_GOOGLE_TAG && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date())

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG}')`,
              }}
            />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
