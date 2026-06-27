import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Branches from '../components/Branches';
import GrabU from '../components/GrabU';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Branches />
        <GrabU />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
}
