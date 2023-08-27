import Navbar from '../components/Navbar'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Script from 'next/script'


export default function App({Component, pageProps}) {
    return <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENTID}}>
        <Navbar />
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

        <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
        </Script>
        <Component {...pageProps} />
        <Footer />

    </PayPalScriptProvider>
    
}