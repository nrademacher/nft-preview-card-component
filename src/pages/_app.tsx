import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <title>Next Starter Lite</title>
            </Head>
            <div className="subpixel-antialiased bg-white optimize-legibility text-gray-9">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
