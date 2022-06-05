import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://unpkg.com/github-corners/dist/embed.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log('script loaded correctly')}
        data-href="https://github.com/remarkablemark/nextjs-blog"
        data-target="_blank"
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
