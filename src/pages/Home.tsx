import { useEffect } from 'react';
import Hero from '../components/Hero';
import Tours from '../components/Tours';
import WhyUs from '../components/WhyUs';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import Steps from '../components/Steps';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import { CtaBand } from '../components/Closing';

export default function Home() {
  useEffect(() => {
    document.title = 'D Daniel Tours · Paseos en lancha en Las Galeras, Samaná';
  }, []);
  return (
    <>
      <Hero />
      <Tours />
      <Experiences />
      <WhyUs />
      <CtaBand />
      <Gallery />
      <Steps />
      <Booking />
      <Faq />
    </>
  );
}
