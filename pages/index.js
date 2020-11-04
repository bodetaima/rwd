import Head from 'next/head';
import { NavBar } from '../components/ui/navbar';
import {
  ProductIntroduction,
  FeatureOne,
  Contact,
  FeatureX,
  FeatureY,
} from '../components/ui/home';
import { Footer } from '../components/ui/footer';
import '../styles/header.styl';
import '../styles/home.styl';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <section id="intro-section">
          <ProductIntroduction />
        </section>
        <section id="feature-1">
          <FeatureOne />
        </section>
        <section id="feature-x">
          <FeatureX />
        </section>
        <section id="feature-y">
          <FeatureY />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
