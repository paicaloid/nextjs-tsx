import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SideBar from '../components/sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Header />
        <SideBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  )
}

export default MyApp
