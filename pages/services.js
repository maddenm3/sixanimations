import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Services(){
    return(
        <>
            <Head>
                <title>Services</title>
                <meta name="description" content="We offer 3D animated video and photo services." />

            </Head>
            <main className={styles.page}>

                <div className={styles.description}>
                    <p>
                        Our
                        <code className={styles.code}> Services</code>
                    </p>
                    
                </div>
                <div className={styles.pagemain}>

                <div className={styles.pagecard}>
                    <div>
                        <h1 className={inter.className}>3D Videos</h1>
                    </div>
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
                    <p>Price: $500 per second</p>
                    </div>
                <div className={styles.pagecard}>
                    <div>
                        <h1 className={inter.className}>3D Photos</h1>
                    </div>
                    <Link href="/portfolio" className={styles.pagecard}>
                        <Image
                            className={styles.logo}
                            src="/shoe.jpg"
                            alt="shoe"
                            layout="fill"
                            priority
                            objectFit="cover"
                        />

                    </Link>
                    <p>Price: $500 per photo</p>

                    </div>
                </div>
                <div>
                    <Link href="/request" className={styles.request}><b>Submit a Request</b></Link>
                </div>
            
        </main>
        </>
    )
}