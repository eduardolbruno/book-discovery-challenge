import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Discover Challenge</title>
      </Head>

      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <li>
            <a href="/" style={{ color: "grey" }}>
              Home
            </a>
          </li>
          <li>
            <a href="/search" style={{ color: "grey" }}>
              Search
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.title}>Welcome to Book Discovery Challenge</h1>
      </main>
    </div>
  );
}
