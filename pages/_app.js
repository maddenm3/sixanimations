import '@/styles/globals.css'
import Script from 'next/script'
import { GoogleAnalytics } from 'nextjs-google-analytics'


const GID = process.env.NEXT_PUBLIC_GID


export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId={GID} trackPageViews />
      <Component {...pageProps} />
    </>
  )
  
}
