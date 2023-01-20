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
      {/* <Image
            className={styles.background}
            src="/photos/space.png"
            alt="medium"
            layout="fill"
            priority
            objectFit="cover"
        /> */}
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

       
          {/* <Image
          src='/figma/collab.png'
          className={styles.container}
          layout='fill'
        /> */}

        </div>
{/*     
        <div className={styles.description}>
          <p>
            Welcome to&nbsp;
            <code className={styles.code}>Six Animations</code>
          </p>
          
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/Comp3.svg"
            alt="Next.js Logo"
            width={980}
            height={300}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link
            href="/services"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Services
            </h2>
            <p className={inter.className}>
              We offer 3D animation video and 3D photo services.
            </p>
          </Link>

          <Link
            href="/portfolio"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Our Work
            </h2>
            <p className={inter.className}>
              Check out our previous 3D and CGI work here.
            </p>
          </Link>

          <Link
            href="/about"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About
            </h2>
            <p className={inter.className}>
              Learn about the Six Animations team.
            </p>
          </Link>

          <Link
            href="/request"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Request
            </h2>
            <p className={inter.className}>
              Submit a 3D animation request to Six Animations here.
            </p>
          </Link>
        </div> */}
      </div>
      {/* <div>
        {requests.map((request) => (
          <h2 key={request._id}>{request.name}</h2>
        ))}
      </div> */}
    </>
  )
}
