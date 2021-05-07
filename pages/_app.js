import '../styles/globals.css'
import Layout from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
import 'font-awesome/css/font-awesome.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
      )
}

export default MyApp
