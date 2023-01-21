import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Request(){

    const [message, setMessage] = useState(null)

    const HandleClick = () => {
            setMessage("Submitted! We will contact you within 24 hours to go over your project.")
        
    }

    return(
        <>
            <Head>
                <title>Get a Quote</title>
                <meta name="description" content="Submit a 3D animation request here and get a quote within 24 hours." />
                <link rel="icon" href="/icon3.svg" />

            </Head>
            <div className={styles.main}>
                <nav className={styles.nav}>
                    <Link href='/' className={styles.icon}>
                        <Image
                            src='/icon3.svg'
                            height='70'
                            width='70'

                            />
                    </Link>
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
                <div className={styles.wrapper}>
                    <h1 className={inter.className}>Get a Quote</h1>
                    <form action="/api/request" method="post" className={styles.form}>
                        <label className={inter.className} htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name"/>
                        <label className={inter.className} htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="You@You.com"/>
                        <label className={inter.className} htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" placeholder="Where are you located?"/>
                        <label className={inter.className} htmlFor="business">Business Name:</label>
                        <input type="text" id="business" name="business" placeholder="Your business name and website"/>
                        <label className={inter.className} htmlFor="budget">Budget:</label>
                        <input type="text" id="budget" name="budget" placeholder="What's your budget for this project?"/>
                        <label className={inter.className} htmlFor="message">Tell us about your project:</label>
                        <textarea name="message" className={inter.className} cols="40" rows="10" placeholder="Please give us as many details as possible."></textarea>                        
                        <button className={inter.className} onClick={HandleClick} type="submit">Submit</button>
                        </form>
                        <div className={styles.message}>
                            {message ? <p className={inter.className}>{message}</p> : null}
                        </div>
                    </div>
            </div>

        </>
    )
}