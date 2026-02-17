import React, { useState } from 'react';
import { supabase } from '../lib/supabase.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfu_YEY4kcVe-TUcsyk6SQgApsjvNMDChZc-_XeJx2OGveeSA/formResponse';
  
  const GOOGLE_FORM_ENTRIES = {
    name: 'entry.1933828935',
    email: 'entry.560320876',
    message: 'entry.708071999'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      // 1. Submit to Google Forms
      const googleFormData = new FormData();
      googleFormData.append(GOOGLE_FORM_ENTRIES.name, formData.name);
      googleFormData.append(GOOGLE_FORM_ENTRIES.email, formData.email);
      googleFormData.append(GOOGLE_FORM_ENTRIES.message, formData.message);

      // Using mode: 'no-cors' because Google Forms doesn't send CORS headers back.
      // The request will still reach Google and be processed.
      fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      }).catch(err => console.error('Google Form submission failed:', err));

      // 2. Save to Supabase (Existing logic)
      const { error } = await supabase
        .from('queries')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // 3. Success Feedback
      setStatus('success');
      
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });

      // Reset status back to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Craft Something <br /><span className="text-blue-500">Extraordinary.</span></h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Have a project in mind? We'd love to hear from you. Our team of experts is ready to transform your vision into cinematic reality.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-lg font-medium text-white tracking-wide">+91 7023087402</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg font-medium text-white tracking-wide break-all uppercase">VOIDCRAFTSTUDIOOFFICIAL@GMAIL.COM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-500 focus:outline-none transition-colors text-white disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-500 focus:outline-none transition-colors text-white disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={6} 
                  name="message"
                  required
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-500 focus:outline-none transition-colors text-white resize-none disabled:opacity-50"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg active:scale-95 flex items-center justify-center space-x-2 ${
                  status === 'success' 
                  ? 'bg-emerald-600 text-white' 
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting...</span>
                  </>
                ) : status === 'success' ? (
                  'Message Received!'
                ) : status === 'error' ? (
                  'Error! Please Try Again'
                ) : (
                  'Send Message'
                )}
              </button>
              
              {status === 'success' && (
                <p className="text-center text-xs text-emerald-400 animate-pulse uppercase tracking-[0.2em] font-bold">
                  Success! Your inquiry has been stored.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;