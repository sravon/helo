import Layout from '../components/layout/layout'
import AdminContext from '../context/AdminContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AdminContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AdminContext>
  )
}

export default MyApp
