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
            <title>About Us</title>
            <meta name="description" content="Six Animations is a professional CGI and 3D animated studio based in Shenzhen." />
            <link rel="icon" href="/icon3.svg" />

        </Head>
        <div className={styles.main}>
                <nav className={styles.nav}>
                    <Link href='/' className={styles.logo}>
                        <Image
                        src='/logo2.svg'
                        layout='fill'

                        />
                    </Link>
                    

                    <div className={styles.navSelections}>                  
                        <Link href='/portfolio' className={styles.link}>
                        <p className={inter.className}>
                            Portfolio
                        </p>
                        </Link>
                        <Link href='/about' className={styles.link}>
                        <p className={inter.className}>
                            About
                        </p>
                        </Link>
                        <Link href='/getquote' className={styles.request}>
                        <p className={inter.className}>
                            Get Quote
                        </p>
                        </Link>
                    </div>
                </nav>
                <div>
                    
                    <div className={styles.pagecard}>
                        <div>
                            <h1 className={inter.className}>Our Team</h1>
                        </div>
                        <br></br>
                            <p className={inter.className}>We are a team of 3D and CGI animators based in Shenzhen, China. 
                                We focus primarily on product promotion videos, advanced explainer videos, 
                                and high quality product photos. We will help 
                                produce world-class animations to bring your brand to life. 
                                Click "Get a Quote" and let us know about your project.</p>
                            
                    </div>
            </div>        
    </div>
    </>
    )
}