import Navbar from '../components/Navbar'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../styles/globals.css'
import Footer from '../components/Footer'


export default function App({Component, pageProps}) {
    return <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENTID}}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />

    </PayPalScriptProvider>
    
}