/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { CosmicParticles } from './components/CosmicParticles';
import { CelestialPlanets } from './components/CelestialPlanets';
import { ContinuousScrollCanvas } from './components/ContinuousScrollCanvas';
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
  const [currentFrame, setCurrentFrame] = useState(1);

  return (
    <div className="relative min-h-screen w-full bg-transparent text-[#F6F4EB] overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
      {/* =========================================================================
          LAYER 0 (z-0): COSMIC BACKGROUND & 4-STAGE COLOR HIERARCHY
          Light Blue/Teal Cosmic Dust -> Deep Navy -> Dark Indigo -> Midnight Black
          ========================================================================= */}
      <CosmicBackground />

      {/* =========================================================================
          LAYER 1 (z-[1]): FLOATING STARDUST PARTICLES CANVAS
          ========================================================================= */}
      <CosmicParticles />

      {/* =========================================================================
          LAYER 2 (z-[2]): 3D CIRCULAR ORBITING PLANETS
          Continuous 3D elliptical orbit around screen perimeter in deep background space
          ========================================================================= */}
      <CelestialPlanets />

      {/* =========================================================================
          LAYER 3 (z-[4] & z-[5]): PERSISTENT BACKGROUND VIDEO CANVAS & ATMOSPHERIC GLOW
          GSAP ScrollTrigger with scrub: 0.5, concise hero pinning, and downstream flow
          ========================================================================= */}
      <ContinuousScrollCanvas currentFrameCallback={setCurrentFrame} />

      {/* =========================================================================
          LAYER 4 (z-40): TOP NAVIGATION BAR
          ========================================================================= */}
      <Navbar 
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* =========================================================================
          LAYER 5 (z-10): CELESTIAL PAGE SECTIONS
          ========================================================================= */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section: Concise Pinned Wings Transformation + Interactive Dial Toggle */}
        <AngelWingsHero 
          onOpenDownload={() => setDownloadModalOpen(true)} 
          currentFrame={currentFrame}
        />

        {/* Section 2: "About Us" Giant Celestial Sphere */}
        <AboutUsOrb />

        {/* Section 3: "Your data is private. Period." */}
        <DataPrivacySection />

        {/* Section 4: Multi-Stop Feature Stepper */}
        <FeatureStopsCarousel />

        {/* Section 5: Angelic Wings Sanctuary with Scroll Parallax */}
        <WingsSanctuarySection />

        {/* Section 6: Download QR Code Section */}
        <DownloadSection onOpenDownloadModal={() => setDownloadModalOpen(true)} />
      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer 
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Floating "? Contact Us" Pill Button & Modal */}
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
