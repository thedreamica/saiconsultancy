import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import OurValues from "@/components/ourValues";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials.jsx";
import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
// import OurApproach from "@/components/ourApproach";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sai Consultancy</title>
        <meta name="description" content="We Catalyze your Growth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="sri sai consultancy, sai consultancy, saiconsultancy"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <HeroSection />
      <OurValues />
      <Services />
      <Testimonials />
      {/* <OurApproach /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
