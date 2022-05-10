import type { NextPage } from 'next'
import { useState } from 'react'
import Element from '../components/chartElement/element'
import Meta from '../components/shared/metaTags'
import Navbar from '../components/shared/navbar/navbar'
import styles from '../styles/Home.module.css'

class StateMgmt {
  constructor() {}

  getTitleName(state: string) : string {
    if (state == "recent") return "Most Recent Advices"
    if (state == "popular") return "Most Popular Advices"
    return "Most Viewed Advices"
  }
}

const Home: NextPage = () => {
  const state = new StateMgmt()
  const [currentState, setCurrentState] = useState("recent")

  return (
    <div className={styles.container}>
      <Meta title={ "Million Ways To ... ?!" } />
      <Navbar setState={setCurrentState} state={0} />
      <main className={styles.main} id={"home"}>
        <h1 className={styles.title}>
          A platform to give horrible advice to other human beings in this world!
        </h1>
        <div className={styles.countSection}>
          <h4>Currently, there are</h4>
          <code className={styles.code}>69 &#128169;</code>
          <h4>out of 1,000,000 sh*tty advices (and counting...) on here</h4>
        </div>
      </main>
      <div className={styles.body} id={'advice'}>
        <div className={styles.adviceChart}>
          <div className={styles.chartTitle}>
            <h1>{ state.getTitleName(currentState) }</h1>
          </div>
          <div className={styles.chartContent}>
            <div className={styles.col1}>#</div>
            <div className={styles.col2}>A Way To...</div>
            <div className={styles.col3}>Story</div>
          </div>
          <Element rank={"1"} title={"Make a big bank"} desp={"Buy low and sell high"} />
        </div>
      </div>
    </div>
  )
}

export default Home
