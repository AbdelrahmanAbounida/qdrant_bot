import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    let description = "chat with url";
    let sitename = "ChatWithUrl";
    let title = "Chat With URL";
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
      <body className="bg-[#17181C] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}