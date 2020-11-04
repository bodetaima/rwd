import Head from 'next/head';
import { NavBar } from '../components/ui/navbar';
import { HomeView } from '../components/views';
import useSticky from '../components/ui/navbar/useSticky';
import '../styles/header.styl';
import '../styles/home.styl';

export default function Home() {
  const { isSticky, element } = useSticky();

  return (
    <>
      <Head>
        <title>Vantage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar sticky={isSticky} element={element} />
      </header>
      <main style={{ marginTop: '3.5rem' }}>
        <HomeView />
      </main>
    </>
  );
}
