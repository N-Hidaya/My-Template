'use client'

import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div>
      <Head>
        <title>AI DAYA | Portfolio</title>
        <meta name='description' content='Generated by nextjs' />
        <link rel='icon' href='/assets/logo.png' />
      </Head>
      <Main />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

