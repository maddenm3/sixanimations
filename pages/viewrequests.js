import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


import connectMongo from '../utils/connectMongo';
import Request from '../models/newRequest';

export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const requests = await Request.find();
    requests.order({column: '_id'}, {options: {ascending: false}})
    console.log('FETCHED DOCUMENTS');

    return {
      props: {
        requests: JSON.parse(JSON.stringify(requests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};


export default function viewrequests({requests}){
    return(
        <div>
            <Head>
                <title>Requests</title>
            </Head>
            <div className={styles.portfolio}>
            <div className={styles.sticky}>
                <div className={styles.description}>
                    <p>
                        All
                        <code className={styles.code}> Requests</code>
                    </p>
                    
                </div>
                
            </div>
            <div className={styles.container}>
                {requests.map(r=>(
                    
                        <div key={r._id} className={styles.card}>
                            <p><b>Name: </b> {r.name}</p>
                            <p><b>Email: </b> {r.email}</p>
                            <p><b>Country: </b> {r.country}</p>
                            <p><b>Business: </b> {r.business}</p>
                            <p><b>Budget: </b> {r.budget}</p>
                            <p><b>Message: </b> {r.message}</p>
                            
                        </div>
                    
                ))}
            </div>
            
        </div>
            
      </div>
    )
}