import React, { useState } from 'react';
import { 
  Lock, 
  Wifi, 
  Battery, 
  Plus, 
  Moon, 
  LayoutGrid, 
  Sparkles, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Droplets,
  Eye,
  EyeOff,
  Feather
} from 'lucide-react';

interface DailyDecodeInfo {
  day: number;
  totalDays: number;
  phase: 'Menstrual' | 'Follicular' | 'Ovulatory' | 'Luteal';
  periodInDays: number;
  pregnancyChance: 'LOW' | 'MEDIUM' | 'HIGH';
  hormoneHeadline: string;
  quote: string;
  angelNumber: string;
  angelArchetype: string;
  estrogenLevel: number;
  progesteroneLevel: number;
}

const DECODES: DailyDecodeInfo[] = [
  {
    day: 15,
    totalDays: 28,
    phase: 'Ovulatory',
    periodInDays: 13,
    pregnancyChance: 'MEDIUM',
    hormoneHeadline: 'Peak Estrogen & Angelic Radiance',
    quote: 'Hormone-wise, this is a day of formidable power. You are human champagne. The world is your crystal flute. Euphoria awaits.',
    angelNumber: '777',
    angelArchetype: 'Seraphic Light',
    estrogenLevel: 94,
    progesteroneLevel: 32,
  },
  {
    day: 21,
    totalDays: 28,
    phase: 'Luteal',
    periodInDays: 7,
    pregnancyChance: 'LOW',
    hormoneHeadline: 'Progesterone Sanctuary & Inner Armor',
    quote: 'Your energy pulls inward into holy stillness. Channel the guardian archangel within: protect your peace, honor your intuition, and let rest be your sacred armor.',
    angelNumber: '444',
    angelArchetype: 'Archangel Guardian',
    estrogenLevel: 45,
    progesteroneLevel: 88,
  },
  {
    day: 1,
    totalDays: 28,
    phase: 'Menstrual',
    periodInDays: 28,
    pregnancyChance: 'LOW',
    hormoneHeadline: 'Seraphic Reset & Deep Astral Waters',
    quote: 'A grand cosmic shedding. You release what no longer serves your constellation. Gravity softens; your spirit recalibrates in the quiet cradle of the universe.',
    angelNumber: '111',
    angelArchetype: 'Astral Healer',
    estrogenLevel: 18,
    progesteroneLevel: 12,
  },
  {
    day: 8,
    totalDays: 28,
    phase: 'Follicular',
    periodInDays: 20,
    pregnancyChance: 'LOW',
    hormoneHeadline: 'Rising Wings & Creative Supernova',
    quote: 'Estrogen ascends like starlight unfurling crystalline feathers. Your mind is sharp, curiosity ignites, and every idea has the wings to transcend the ordinary.',
    angelNumber: '333',
    angelArchetype: 'Cherubic Spark',
    estrogenLevel: 68,
    progesteroneLevel: 15,
  },
];

interface PhoneMockupProps {
  onLogPeriodClick?: () => void;
  activeWingMode?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ onLogPeriodClick, activeWingMode }) => {
  const [decodeIndex, setDecodeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'home' | 'grid' | 'add' | 'wisdom' | 'profile'>('home');
  const [hidePregnancy, setHidePregnancy] = useState(false);
  const [showLogSuccess, setShowLogSuccess] = useState(false);

  const current = DECODES[decodeIndex];

  const handleNextDay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDecodeIndex((prev) => (prev + 1) % DECODES.length);
  };

  const handlePrevDay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDecodeIndex((prev) => (prev - 1 + DECODES.length) % DECODES.length);
  };

  const handleAddPeriod = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLogSuccess(true);
    setTimeout(() => setShowLogSuccess(false), 2400);
    if (onLogPeriodClick) onLogPeriodClick();
  };

  // Ring dots for circular period dial (28 dots)
  const ringDots = Array.from({ length: 28 }).map((_, i) => {
    const angle = (i / 28) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const r = 58;
    const cx = 75 + r * Math.cos(rad);
    const cy = 75 + r * Math.sin(rad);
    const isPassed = i < current.day;
    const isCurrent = i === current.day - 1;
    return { id: i, cx, cy, isPassed, isCurrent, angle };
  });

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-[310px] sm:w-[335px] h-[670px] select-none will-change-transform"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Sleek smartphone outer frame with metallic edge & shadow */}
      <div className="w-full h-full rounded-[48px] p-3 bg-gradient-to-b from-[#2a223f] via-[#161129] to-[#0c0919] border-[3px] border-[#443864]/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(147,112,219,0.2)] relative z-20 overflow-hidden flex flex-col justify-between">
        
        {/* Screen inner glass */}
        <div className="w-full h-full rounded-[40px] bg-[#0c081e] flex flex-col justify-between overflow-hidden relative border border-white/10 text-white font-sans">
          
          {/* Subtle star particle glow inside phone screen */}
          <div className="absolute inset-0 bg-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />

          {/* Top Status Bar & Dynamic Island */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-medium text-stone-200 z-10">
            <span className="font-semibold tracking-tight">9:41</span>
            
            {/* Dynamic Island Pill with Lock */}
            <div className="w-20 h-5 rounded-full bg-black flex items-center justify-center gap-1.5 px-2">
              <Lock size={10} className="text-purple-300" />
              <span className="text-[9px] text-purple-200 font-mono tracking-tighter">NAVICARE</span>
            </div>

            <div className="flex items-center gap-1.5 text-stone-300">
              <Wifi size={11} />
              <Battery size={13} className="text-white" />
            </div>
          </div>

          {/* Interactive Phone Content Container */}
          <div className="flex-1 px-4 flex flex-col justify-between overflow-y-auto no-scrollbar pb-2">
            
            {/* Dial Section */}
            <div className="pt-1 flex flex-col items-center relative">
              {/* Day Switcher Controls on top of dial */}
              <div className="w-full flex items-center justify-between px-2 text-[10px] text-purple-300/80 mb-1">
                <button 
                  onClick={handlePrevDay} 
                  className="hover:text-white flex items-center gap-0.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:bg-white/15 cursor-pointer transition-colors"
                >
                  <ChevronLeft size={10} /> Prev Day
                </button>
                <span className="font-mono uppercase tracking-wider text-purple-200 text-[10px]">
                  {current.phase} Phase
                </span>
                <button 
                  onClick={handleNextDay} 
                  className="hover:text-white flex items-center gap-0.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:bg-white/15 cursor-pointer transition-colors"
                >
                  Next Day <ChevronRight size={10} />
                </button>
              </div>

              {/* The Circular Dial reproducing Screenshot 1 */}
              <div className="relative w-[150px] h-[150px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 150 150">
                  {/* Subtle track circle */}
                  <circle cx="75" cy="75" r="58" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Rainbow arc gradient glow for active phase */}
                  <circle 
                    cx="75" 
                    cy="75" 
                    r="58" 
                    fill="none" 
                    stroke="url(#dialRainbow)" 
                    strokeWidth="3.5" 
                    strokeDasharray={`${(current.day / current.totalDays) * 364} 364`}
                    strokeLinecap="round"
                    transform="rotate(-90 75 75)"
                  />
                  <defs>
                    <linearGradient id="dialRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="35%" stopColor="#fbbf24" />
                      <stop offset="70%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>

                  {/* Render dot ticks */}
                  {ringDots.map((dot) => (
                    <circle
                      key={dot.id}
                      cx={dot.cx}
                      cy={dot.cy}
                      r={dot.isCurrent ? 4 : 2}
                      fill={dot.isCurrent ? '#ffffff' : dot.isPassed ? '#f472b6' : 'rgba(255,255,255,0.3)'}
                      className={dot.isCurrent ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]' : ''}
                    />
                  ))}
                </svg>

                {/* Dial Center Text matching Screenshot 1 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                    PERIOD IN
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-white my-0.5">
                    {current.periodInDays} Days
                  </span>
                  
                  {/* "+ Add Period" Pill Button */}
                  <button
                    onClick={handleAddPeriod}
                    className="mt-1 px-3 py-1 rounded-full bg-[#352554] hover:bg-[#4b3577] border border-purple-400/30 text-[10px] font-medium text-purple-100 flex items-center gap-1 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <Plus size={10} className="text-purple-300" />
                    Add Period
                  </button>
                </div>
              </div>

              {/* Log feedback banner */}
              {showLogSuccess && (
                <div className="absolute top-1/2 -translate-y-1/2 bg-emerald-950/90 border border-emerald-400 text-emerald-200 text-[11px] px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-30 animate-in fade-in zoom-in-95">
                  <Sparkles size={12} />
                  Cycle synced with Angelic NaviCare
                </div>
              )}

              {/* Pregnancy Chance Pill */}
              <div className="mt-2 flex items-center gap-2 text-[10px] text-stone-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                <span className="text-purple-300 font-semibold tracking-wider">
                  {!hidePregnancy ? `${current.pregnancyChance} CHANCE OF PREGNANCY` : 'PREGNANCY STATUS HIDDEN'}
                </span>
                <button 
                  onClick={() => setHidePregnancy(!hidePregnancy)}
                  className="text-stone-400 hover:text-white underline cursor-pointer"
                >
                  {hidePregnancy ? 'Show' : 'Hide'}
                </button>
              </div>
            </div>

            {/* Hormone Wave Graph matching Screenshot 1 */}
            <div className="mt-3 relative bg-black/30 rounded-2xl p-2.5 border border-white/5">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-stone-400 px-1 mb-1">
                <span className="text-fuchsia-400 font-bold">OVULATION</span>
                <span className="text-indigo-300">LUTEAL PHASE</span>
              </div>

              {/* Multi-layered Wave Curve */}
              <div className="relative h-12 w-full overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 280 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.45" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0c081e" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="45%" stopColor="#fb7185" />
                      <stop offset="60%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>

                  {/* Wave area fill */}
                  <path
                    d="M 0 45 Q 40 40 70 30 T 140 10 T 210 28 T 280 42 L 280 50 L 0 50 Z"
                    fill="url(#waveGrad)"
                  />
                  {/* Wave contour line */}
                  <path
                    d="M 0 45 Q 40 40 70 30 T 140 10 T 210 28 T 280 42"
                    fill="none"
                    stroke="url(#strokeGrad)"
                    strokeWidth="2.5"
                  />
                  {/* Active day vertical marker cursor */}
                  <line 
                    x1={`${(current.day / current.totalDays) * 260 + 10}`} 
                    y1="0" 
                    x2={`${(current.day / current.totalDays) * 260 + 10}`} 
                    y2="50" 
                    stroke="#ffffff" 
                    strokeWidth="1.5" 
                    strokeDasharray="2 2"
                  />
                  <circle 
                    cx={`${(current.day / current.totalDays) * 260 + 10}`} 
                    cy="14" 
                    r="4" 
                    fill="#ffffff" 
                    className="drop-shadow-[0_0_8px_#ffffff]"
                  />
                </svg>
              </div>

              {/* Angelic Synchronicity Tag */}
              <div className="flex items-center justify-between text-[9px] text-purple-200/90 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1 font-mono">
                  <Sparkles size={9} className="text-amber-300" /> Angel #{current.angelNumber}
                </span>
                <span className="text-stone-400">{current.angelArchetype}</span>
              </div>
            </div>

            {/* Daily Decode Section matching Screenshot 1 */}
            <div className="mt-3 bg-gradient-to-b from-[#1a1236]/90 to-[#120b28]/90 rounded-2xl p-3 border border-purple-500/20 text-left relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between text-[10px] text-stone-400 mb-1">
                <span className="font-mono text-purple-300 font-semibold tracking-wider uppercase">
                  CYCLE DAY {current.day} OF {current.totalDays}
                </span>
                <span className="text-[9px] text-purple-400/80 bg-purple-900/40 px-2 py-0.5 rounded-full border border-purple-500/20">
                  {current.phase}
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-white tracking-tight mb-1">
                Your Daily Decode
              </h4>

              <p className="text-[11px] leading-relaxed text-stone-200 line-clamp-4 font-normal">
                {current.quote}
              </p>
            </div>
          </div>

          {/* Bottom App Navigation Bar matching Screenshot 1 */}
          <div className="pt-2 pb-3 px-5 bg-[#090616] border-t border-white/10 flex items-center justify-between text-stone-400">
            {/* 1. Moon Icon */}
            <button
              onClick={() => setActiveTab('home')}
              className={`p-1.5 transition-colors cursor-pointer ${
                activeTab === 'home' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'hover:text-stone-200'
              }`}
              title="Cycles & Moon"
            >
              <Moon size={18} />
            </button>

            {/* 2. Grid Icon */}
            <button
              onClick={() => setActiveTab('grid')}
              className={`p-1.5 transition-colors cursor-pointer ${
                activeTab === 'grid' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'hover:text-stone-200'
              }`}
              title="Overview Grid"
            >
              <LayoutGrid size={18} />
            </button>

            {/* 3. Center Elevated Plus Button */}
            <button
              onClick={handleAddPeriod}
              className="w-10 h-10 -mt-2 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 text-white flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Log Event"
            >
              <Plus size={20} strokeWidth={2.5} />
            </button>

            {/* 4. 'W' Hormone Wave / Wisdom */}
            <button
              onClick={() => setActiveTab('wisdom')}
              className={`p-1.5 font-serif font-black text-lg transition-colors cursor-pointer ${
                activeTab === 'wisdom' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'hover:text-stone-200'
              }`}
              title="Wave Hormone Wisdom"
            >
              W
            </button>

            {/* 5. User / Profile Icon */}
            <button
              onClick={() => setActiveTab('profile')}
              className={`p-1.5 transition-colors cursor-pointer ${
                activeTab === 'profile' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'hover:text-stone-200'
              }`}
              title="Angelic Constellation Profile"
            >
              <User size={18} />
            </button>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-28 h-1 bg-stone-500/40 rounded-full mx-auto my-1" />
        </div>
      </div>
    </div>
  );
};
