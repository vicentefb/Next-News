import Head from "next/head";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Next News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="page-container">
          <Toolbar />
          <div className={styles.main}>
            <h1>Next.js News App</h1>
            <h3>Your one stop shop for the latest news articles</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
