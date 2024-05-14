import Image from 'next/image'
import styles from './page.module.css'
import HomeComp from '@/components/home';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Rigved Portfolio Website</h1> */}
      <HomeComp />
    </main>
  )
}
