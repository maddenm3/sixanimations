import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import images from './images'


export default function portfolio(){
    return(
        <div>
            <Head>
                <title>Our Work</title>
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
                {images.images.map(i=>(
                    
                        <div key={i.id}>
                            <Image 
                            src={i.url}
                            height="600"
                            width="1000"
                            className={styles.screenshot}
                            alt="pic"

                            />
                            
                        </div>
                    
                ))}
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