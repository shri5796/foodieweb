import React from 'react'

import ContactNav from '../components/navbar/ContactNav'
import MenuBar from '../components/navbar/MenuBar'
import styles from './Home.module.css'
import heroBg from '../assets/HomeImage1.png'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </header>

      <main>
        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-label="Hero"
        >
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Best food for
              <br />
              your taste
            </h1>
            <p className={styles.heroSubtitle}>
              Discover delectable cuisine and unforgettable moments
              <br />
              in our welcoming, culinary haven.
            </p>
            <div className={styles.heroActions}>
              <button type="button" className={`${styles.heroBtn} ${styles.primary}`}>
                Book A Table
              </button>
              <button type="button" className={`${styles.heroBtn} ${styles.secondary}`}>
                Explore Menu
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
