import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Request(){

    // const handleOnSubmit = async(e) => {
    //     e.preventDefault();
      
    //     // const formData = {};
      
    //     // Array.from(e.currentTarget.elements).forEach(field => {
    //     //   if ( !field.name ) return;
    //     //   formData[field.name] = field.value;
    //     // });
      
    //     await fetch('/api/request', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         name: e.target.name,

    //       })
    //     })

    //   }


    return(
        <>
            <Head>
                <title>Get a Quote</title>
                <meta name="description" content="Submit a 3D animation request here and get a quote within 24 hours." />

            </Head>
            <main className={styles.page}>
                <div className={styles.description}>
                    <p>
                        Get a 
                        <code className={styles.code}> Quote</code>
                    </p>
                </div>
                <div className={styles.pagemain}>
                    <form action="/api/request" method="post" className={styles.form}>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"/>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" />
                        <label for="country">Country:</label>
                        <input type="text" id="country" name="country" />
                        <label for="business">Business Name:</label>
                        <input type="text" id="business" name="business" />
                        <label for="budget">Budget:</label>
                        <input type="text" id="budget" name="budget" />
                        <label for="message">Tell us about your project:</label>
                        <textarea name="message" cols="40" rows="10"></textarea>                        
                        <button type="submit">Submit</button>
                        </form>
                    </div>
            </main>

        </>
    )
}