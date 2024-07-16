'use client'

import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Script from 'next/script'


export default function App({children}) {
    return <html>
            <body>
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
                    <div className='pt-40'>
                    {children}

                    </div>
                <Footer />
            </body>

    </html>
     
    
}