import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// import connectMongo from '../utils/connectMongo';
// import Request from '../models/newRequest';

// export const getServerSideProps = async () => {
//   try {
//     console.log('CONNECTING TO MONGO');
//     await connectMongo();
//     console.log('CONNECTED TO MONGO');

//     console.log('FETCHING DOCUMENTS');
//     const requests = await Request.find();
//     console.log('FETCHED DOCUMENTS');

//     return {
//       props: {
//         requests: JSON.parse(JSON.stringify(requests)),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };


const inter = Inter({ subsets: ['latin'] })

export default function Home({ requests }) {

  
  return (
    <>
      <Head>
        <title>Six Animations | Movie-quality 3D animations</title>
        <meta name="description" content="Six Animations is a 3D animation studio specializing in 3D animated videos and 3D animated photos for business use." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/6.svg" />
      </Head>
      <main className={styles.main}>
      {/* <Image
            className={styles.background}
            src="/photos/space.png"
            alt="medium"
            layout="fill"
            priority
            objectFit="cover"
        /> */}
    
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
        </div>
      </main>
      {/* <div>
        {requests.map((request) => (
          <h2 key={request._id}>{request.name}</h2>
        ))}
      </div> */}
    </>
  )
}
