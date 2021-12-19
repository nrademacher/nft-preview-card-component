import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
                <title>Frontend Mentor | NFT preview card component</title>
            </Head>
            <div className="subpixel-antialiased bg-white optimize-legibility text-gray-9">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App
