/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { CosmicParticles } from './components/CosmicParticles';
import { Navbar } from './components/Navbar';
import { AngelWingsHero } from './components/AngelWingsHero';
import { AboutUsOrb } from './components/AboutUsOrb';
import { DataPrivacySection } from './components/DataPrivacySection';
import { FeatureStopsCarousel } from './components/FeatureStopsCarousel';
import { WingsSanctuarySection } from './components/WingsSanctuarySection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { ContactUsModal } from './components/ContactUsModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0819] text-[#F6F4EB] overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
      {/* Universe starfield and cosmic atmosphere */}
      <CosmicBackground />
      {/* Floating stardust canvas particles */}
      <CosmicParticles />

      {/* Top Navigation Bar with Stardust Logo & Download App Button */}
      <Navbar 
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Celestial Experience */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section: Crystal Wings Centerpiece + 3D Rotating Phone Tracker + Planets */}
        <AngelWingsHero onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* Section 2: "About Us" Giant Celestial Sphere (Screenshot 2 / Video) */}
        <AboutUsOrb />

        {/* Section 3: "Your data is private. Period." (Frame 4 from video) */}
        <DataPrivacySection />

        {/* Section 4: Multi-Stop Feature Stepper (Frames 7 & 8 from video) */}
        <FeatureStopsCarousel />

        {/* Section 5: Angelic Wings Sanctuary with Scroll Parallax (Image 4 Cleaned) */}
        <WingsSanctuarySection />

        {/* Section 6: Download QR Code Section (Frame 9 from video) */}
        <DownloadSection onOpenDownloadModal={() => setDownloadModalOpen(true)} />
      </main>

      {/* Comprehensive 4-Column Footer with Central Spectral Moon Ring (Frame 9 from video) */}
      <Footer 
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Floating "? Contact Us" Pill Button & Modal (Screenshots 1, 2, 3, Video) */}
      <ContactUsModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onOpen={() => setContactModalOpen(true)}
      />

      {/* Download App Modal */}
      <DownloadModal 
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
