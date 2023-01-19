import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function About(){
    return(
        <>
        <Head>
        {/* <!-- Google tag (gtag.js) --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-R0TYQHP3W5"></script>
            <script>
            {window.dataLayer = window.dataLayer || []}
            {function gtag(){dataLayer.push(arguments)}}
            {gtag('js', new Date())}
            {gtag('config', 'G-R0TYQHP3W5')}
            </script> */}
            <title>About</title>
        </Head>
        <main className={styles.page}>

            <div className={styles.description}>
                <p>
                    About
                    <code className={styles.code}> Six Studios</code>
                </p>
                
            </div>
            <div className={styles.pagemain}>

            <div className={styles.pagecard}>
                
                <Link href="/portfolio" className={styles.pagecard}>
                    <Image
                        className={styles.logo}
                        src="/video2.jpg"
                        alt="video"
                        layout="fill"
                        priority
                        objectFit="cover"
                    />

                </Link>
                </div>
            <div className={styles.pagecard}>
                <div>
                    <h1 className={inter.className}>Our Team</h1>
                </div>
                <br></br>
                    <p>We are a team of 3D and CGI animators based in Shenzhen, China. 
                        We focus primarily on product promotion videos, advanced explainer videos, 
                        and high quality product photos. If you are in need of 3D support for 
                        your business, please submit a request.</p>
                        <div>
                            <br></br>
                            <br></br>
                <Link href="/request" className={styles.request}><b>Submit a Request</b></Link>
            </div>
                </div>
                
            </div>
            
        
    </main>
    </>
    )
}