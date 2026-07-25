import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import Process from '@/components/Process';
import Contact, { Footer } from '@/components/Contact';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <Services />
        <SocialProof />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
