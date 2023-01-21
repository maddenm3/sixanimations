import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ requests }) {

  
  return (
    <>
      <Head>
        <title>Six Animations | Movie-quality 3D animations</title>
        <meta name="description" content="Six Animations is a 3D animation studio specializing in 3D animated videos and 3D animated photos for business use." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon3.svg" />
      </Head>
      <div className={styles.main}>
        <nav className={styles.nav}>
        <Image className={styles.icon}
            src='/icon3.svg'
            height='70'
            width='70'

            />
          <div className={styles.logo}>
            
            <Image
              src='/logo2.svg'
              layout='fill'
              objectFit='contain'

            />
          </div>
          
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
          <div className={styles.container}>
            <Image
              src='/figma/worldclass.png'
              className={styles.screenshot}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className={styles.container}>
            <Image
              src='/figma/unique.png'
              className={styles.screenshot}
              layout='fill'
              objectFit='contain'

            />
          </div>
          <div className={styles.container}>
            <Image
              src='/figma/vivid.png'
              className={styles.screenshot}
              layout='fill'
              objectFit='contain'

            />
          </div>
          <div className={styles.container}>
            <Image
              src='/figma/dimension.png'
              className={styles.screenshot}
              layout='fill'
              objectFit='contain'

            />
          </div>
          <div className={styles.container}>
            <Image
              src='/figma/collab2.png'
              className={styles.screenshot}
              layout='fill'
              objectFit='contain'

            />
          </div>
         
        </div>

        <div className={styles.footer}>
          <h1>Footer</h1>
        </div>


      </div>

    </>
  )
}
