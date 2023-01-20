import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Success(){
    return(
        <>
            <Head>
                <title>Success</title>
                <link rel="icon" href="/icon3.svg" />

            </Head>
            <main className={styles.page}>
                <h1 className={inter.className}>Submission Successful!</h1>
                <br></br>
                <p>We will contact you within 24 hours to go over your project and begin the planning stages.</p>
                <br></br>
            <Link href="/"><b>Go Home</b></Link>
        </main>
        </>
    )
}