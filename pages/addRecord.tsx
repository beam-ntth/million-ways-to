import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import Meta from '../components/shared/metaTags'
import Navbar from '../components/shared/navbar/navbar'
import styles from '../styles/AddRecord.module.css'

const AddRecord: NextPage = () => {
    const [title, setTitle] = useState("")

    return (
        <div className={styles.container}>
            <Meta title={ "Million Ways To ... ?!" } />
            <Navbar setState={null} state={3} />
            <main className={styles.main} id={"home"}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>One way to</h1>
                    <input type={'text'} placeholder={'Make money from bitcoin'}
                        value={title}
                        onChange={x => setTitle(x.target.value.substring(0, 40))} />
                    <h1 className={styles.title}>...</h1>
                </div>
                <p>Character count: {title.length}/40</p>
                <div className={styles.countSection}>
                    <textarea placeholder={`Listen up losers. Just buy low and sell high. What's the big deal?`} />
                </div>
                <div className={styles.submitSection}>
                    <Link href='/'>
                        <button>Add My Amazing Advice &#128526;</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default AddRecord