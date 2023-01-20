import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function portfolio(){
    
    return(
        <>
            <Head>
                <title>Our Work</title>
                <meta name="description" content="View a snapshot of our 3D videos and photos here." />

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
            <div className={styles.wrapper}>
                <h1 className={inter.className}>Check out some screengrabs from our recent 3D videos</h1>
                <div className={styles.container}>
                    <Image 
                        src='/photos/cars.png'
                        layout='fill'
                        className={styles.screenshot}
                        alt="cars"
                    />
                </div>
                <div className={styles.container}>
                    <Image 
                        src='/photos/charging.png'
                        layout='fill'

                        className={styles.screenshot}
                        alt="charging"
                    />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/chips.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="chips"
                />
                </div>                
                <div className={styles.container}>
                <Image 
                    src='/photos/earth.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="earth"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/home.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="home"
                />
                </div>                
                <div className={styles.container}>

                <Image 
                    src='/photos/internalcomponents.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="components"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/keys.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="keys"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/kitchen.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="kitchen"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/mechanism.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="mechanism"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/powershare.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="power"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/space.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="space"
                />
                </div>
                <div className={styles.container}>
                <Image 
                    src='/photos/sportmodes.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="sports"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/stepinside.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="step"
                />
                </div>
                <div className={styles.container}>

                <Image 
                    src='/photos/sunrise.png'
                    layout='fill'

                    className={styles.screenshot}
                    alt="sunrise"
                />
                </div>
            </div>
           </div>
            
      </>
    )
}

// Fetching data from the JSON file
// import fsPromises from 'fs/promises'
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'images.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }