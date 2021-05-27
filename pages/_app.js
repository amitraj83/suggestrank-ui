import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/footer.scss'
import App from 'next/app'
import Layout from '../components/layout/layout'

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    )
  }
}

