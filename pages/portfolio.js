import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function portfolio(props){
    const images = props.images
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
                {images.map(i=>(
                    
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

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'images.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}