import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { handlePhoneClick } from '../lib/phone';
import { toast } from 'sonner';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    const text = `*New Contact Message / Inquiry*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/923296000046?text=${text}`, '_blank');
    toast.success('Redirecting to WhatsApp to send message!');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#101B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FFF3E6] tracking-wider mb-4">
            CONTACT LASANI BURGER & BBQ
          </h1>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Have a question, feedback, or want to place a quick order? Reach out to us or visit our restaurant in Shahdara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1B2E52] p-8 rounded-[28px] border border-[#CBD4E5]/15 shadow-xl space-y-8">
              <h3 className="font-display text-2xl text-[#FFF3E6] tracking-wider border-b border-[#CBD4E5]/10 pb-4">
                RESTAURANT INFO
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF7438] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-1 text-base">Location</strong>
                    <span className="text-sm text-[#AAB8D0]">
                      Imamia Colony Road, Imamia Colony, Shahdara, Lahore, Pakistan 54950
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-1 text-base">Phone & WhatsApp</strong>
                    <a
                      href="tel:+923296000046"
                      onClick={handlePhoneClick}
                      className="text-sm text-[#AAB8D0] hover:text-[#FFF3E6] transition-colors font-semibold cursor-pointer"
                    >
                      0329 6000046
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF7438] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-1 text-base">Opening Hours</strong>
                    <span className="text-sm text-[#AAB8D0]">
                      Monday – Sunday<br />
                      4:30 PM – Late Night
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#CBD4E5]/10">
                <a
                  href="https://wa.me/923296000046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1B2E52] p-8 sm:p-10 rounded-[28px] border border-[#CBD4E5]/15 shadow-xl">
              <h3 className="font-display text-2xl text-[#FFF3E6] tracking-wider mb-2">
                SEND US A MESSAGE
              </h3>
              <p className="text-sm text-[#AAB8D0] mb-8">
                Fill out the form below and we'll immediately connect via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ali Khan"
                    className="w-full bg-[#142341] text-[#FFF3E6] text-sm px-4 py-3.5 rounded-2xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300 1234567"
                    className="w-full bg-[#142341] text-[#FFF3E6] text-sm px-4 py-3.5 rounded-2xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-2">
                    Message / Order Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry or order details here..."
                    className="w-full bg-[#142341] text-[#FFF3E6] text-sm px-4 py-3.5 rounded-2xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold py-4 rounded-2xl text-sm transition-all shadow-lg shadow-[#FF7438]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
