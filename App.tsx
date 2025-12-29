
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AgentGrid from './components/AgentGrid';
import Benefits from './components/Benefits';
import Integrations from './components/Integrations';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f8]">
      <Header />
      <main>
        <Hero />
        <AgentGrid />
        <Benefits />
        <Integrations />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
