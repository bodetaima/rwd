import React from 'react';
import {
  ProductIntroduction,
  FeatureOne,
  Contact,
  FeatureX,
  FeatureY,
} from '../ui/home';
import { Footer } from '../ui/footer';

export function HomeView() {
  return (
    <>
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
    </>
  );
}
