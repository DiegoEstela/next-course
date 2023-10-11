import { FC, ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Head from "next/head";
import NavBar from "../Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>next-curse</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
