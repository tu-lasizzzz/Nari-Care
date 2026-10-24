import React, { useState } from 'react';
import { HelpCircle, X, Send, Sparkles, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose, onOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Celestial Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', category: 'General Celestial Inquiry', message: '' });
    }, 2800);
  };

  return (
    <>
      {/* FLOATING "CONTACT US" PILL BUTTON (Reproducing Screenshots 1, 2, 3) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpen}
          aria-label="Open contact support"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#160d2e]/90 hover:bg-[#231549] text-stone-200 hover:text-white border border-white/15 backdrop-blur-md shadow-xl hover:shadow-purple-900/30 transition-all cursor-pointer group text-xs font-medium"
        >
          <HelpCircle size={15} className="text-purple-300 group-hover:rotate-12 transition-transform" />
          <span>Contact Us</span>
        </button>
      </div>

      {/* CONTACT DIALOG MODAL */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#110a26] border border-purple-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_60px_rgba(147,51,234,0.25)] relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <CheckCircle2 size={48} className="text-emerald-400 mb-4 animate-bounce" />
                <h3 className="font-serif text-3xl font-bold mb-2">Message Transmitted</h3>
                <p className="text-stone-300 text-sm max-w-sm">
                  Your transmission has reached the NaviCare Seraphic Constellation. A member of our support team will respond to your astral frequency within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-purple-300 text-xs font-mono uppercase tracking-wider mb-1">
                  <Sparkles size={14} />
                  Celestial Support & Inquiries
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#F6F4EB] mb-2">
                  Connect with NaviCare
                </h3>
                <p className="text-xs text-stone-300 mb-6 leading-relaxed">
                  Have questions about your hormonal health universe, angelic cycle mapping, or data privacy? We are here for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Celeste"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="celeste@universe.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180f33] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    >
                      <option value="General Celestial Inquiry">General Celestial Inquiry</option>
                      <option value="Angelic Synchronicity Support">Angelic Synchronicity & Cycles</option>
                      <option value="Privacy & Sovereign Data">Privacy & Sovereign Data</option>
                      <option value="Partnership & Press">Partnership & Research</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts or inquiry with our constellation..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-medium text-sm transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send size={15} />
                    Send Transmission
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <Mail size={12} className="text-purple-300" />
                    support@navicare.app
                  </span>
                  <span>Average reply: &lt; 4 hours</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
