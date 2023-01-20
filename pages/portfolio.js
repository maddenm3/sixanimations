import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function portfolio(){
    
    return(
        <div>
            <Head>
                <title>Our Work</title>
                <meta name="description" content="View a snapshot of our 3D videos and photos here." />

            </Head>
            <div className={styles.portfolio}>
              <div className={styles.sticky}>
                
                <div className={styles.description}>
                    
                    <p>
                        Our
                        <code className={styles.code}> Work</code>
                    </p>
                    
                </div>
                <div className={styles.description}>
                    <Link href="/request">
                        <p className={styles.code}>Submit a Request</p>
                    </Link>
                </div>
            </div>
            <div className={styles.container}>
                <Image 
                    src='/photos/cars.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="cars"
                />
                <Image 
                    src='/photos/charging.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="charging"
                />
                <Image 
                    src='/photos/chips.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="chips"
                />
                <Image 
                    src='/photos/earth.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="earth"
                />
                <Image 
                    src='/photos/home.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="home"
                />
                <Image 
                    src='/photos/internalcomponents.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="components"
                />
                <Image 
                    src='/photos/keys.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="keys"
                />
                <Image 
                    src='/photos/kitchen.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="kitchen"
                />
                <Image 
                    src='/photos/mechanism.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="mechanism"
                />
                <Image 
                    src='/photos/powershare.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="power"
                />
                <Image 
                    src='/photos/space.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="space"
                />
                <Image 
                    src='/photos/sportmodes.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="sports"
                />
                <Image 
                    src='/photos/stepinside.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="step"
                />
                <Image 
                    src='/photos/sunrise.png'
                    height="600"
                    width="1000"
                    className={styles.screenshot}
                    alt="sunrise"
                />
                {/* {images.map(i=>(
                    
                        <div key={i.id}>
                            <Image 
                            src={i.url}
                            height="600"
                            width="1000"
                            className={styles.screenshot}
                            alt="pic"

                            />
                            {console.log(i.url)}
                            
                        </div>
                    
                ))} */}
                <div className={styles.sticky}>
                    <Link href="/request" className={styles.description}>
                        <p className={styles.code}>Submit a Request</p>
                    </Link>
                </div>
            </div>
            
        </div>
            
      </div>
    )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'images.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}