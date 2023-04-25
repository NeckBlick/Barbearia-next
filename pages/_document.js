import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head >
        <title>Barbearia</title>
      </Head>
      <body>
        <Header/>
        <div className='flex flex-row'>
          <SideBar/>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
