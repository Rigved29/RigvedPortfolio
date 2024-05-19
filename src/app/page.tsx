import Image from 'next/image'
import styles from './page.module.css'
import HomeComp from '@/components/home';
import Layout from './layout';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComp />
    </main>
  )
}
