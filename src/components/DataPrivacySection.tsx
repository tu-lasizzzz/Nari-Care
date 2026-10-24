import React from 'react';
import { ShieldCheck, Lock, EyeOff, Sparkles } from 'lucide-react';

export const DataPrivacySection: React.FC = () => {
  return (
    <section id="privacy-section" className="relative min-h-[90vh] py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Yellow Gas Giant as shown in Frame 4 of the video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[600px] h-[340px] sm:h-[480px] md:h-[600px] rounded-full pointer-events-none select-none opacity-30 sm:opacity-40">
        <div 
          className="w-full h-full rounded-full shadow-[inset_-30px_-25px_50px_rgba(0,0,0,0.9),inset_15px_15px_30px_rgba(255,255,255,0.3),0_0_90px_rgba(234,179,8,0.3)] relative overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #fef08a 0%, #facc15 35%, #eab308 60%, #ca8a04 85%, #713f12 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-60 mix-blend-color-burn bg-[repeating-linear-gradient(0deg,rgba(180,83,9,0.3),rgba(180,83,9,0.3)_6px,rgba(254,240,138,0.1)_6px,rgba(254,240,138,0.1)_16px,rgba(146,64,14,0.5)_16px,rgba(146,64,14,0.5)_24px)]" />
        </div>
      </div>

      {/* Content strictly matching Frame 4 from the user's video */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Serif Headline */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F6F4EB] tracking-tight mb-6 drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          Your data is private.<br />Period.
        </h2>

        {/* Lead Bold Paragraph */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-white mb-6 leading-relaxed max-w-2xl drop-shadow-md">
          <span className="font-bold">We do not sell data.</span> Never have, never will. Our business is built on subscriptions, not your personal information.
        </p>

        {/* Detailed Authentic Manifesto from Video */}
        <div className="space-y-5 text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-2xl text-center">
          <p>
            We take your privacy seriously and protect your personal data by anonymizing and encrypting it.
          </p>
          <p>
            Our encryption method ensures your health data is stored securely and separately from your real-world identity. By partnering with SuperTokens, an authentication platform, we are able to store your contact information externally, while your health data is tied only to a random account ID.
          </p>
          <p>
            We also work hand-in-hand with a legal team specializing in privacy, technology, and data security and have passed Apple and Google’s rigorous privacy and data safety reviews. You can learn more in the Privacy/Data Safety sections of the App Store and Google Play.
          </p>
          <p>
            Transparency is one of our core values. We’ll be ruthlessly candid, even when it’s hard, and we’ll keep raising the bar on privacy and security. We’re not just people working at a company—we’re people who use Stardust ourselves. Protecting your reproductive health data isn’t just business for us. It’s personal.
          </p>
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
          <div className="px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-2 text-stone-200">
            <Lock size={14} className="text-amber-400" />
            <span>End-to-End Encrypted</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-2 text-stone-200">
            <EyeOff size={14} className="text-amber-400" />
            <span>Zero Data Brokerage</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-2 text-stone-200">
            <ShieldCheck size={14} className="text-amber-400" />
            <span>SuperTokens Auth Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};
