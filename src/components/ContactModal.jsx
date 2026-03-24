import { useState, useEffect } from "react";
import { FaTimes, FaEnvelope, FaUser, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#030014]/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-2xl rounded-[32px] overflow-hidden animate-in fade-in zoom-in duration-300"
        style={{ 
          background: "var(--bg-card)",
          border: "1px solid var(--glass-border)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)"
        }}
      >
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left Side - Info */}
          <div 
            className="md:w-2/5 p-10 flex flex-col justify-between text-white"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)" }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Let's Connect</h2>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:kashishkumari87897231@gmail.com" className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors">
                    <FaEnvelope className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Email Me</p>
                    <p className="text-xs font-medium break-all">kashishkumari87897231@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/kashish-kumari04/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors">
                    <FaLinkedin className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">LinkedIn</p>
                    <p className="text-sm font-medium">kashish-kumari04</p>
                  </div>
                </a>
                <a href="https://github.com/kumarikashish-04" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors">
                    <FaGithub className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">GitHub</p>
                    <p className="text-sm font-medium">kumarikashish-04</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Location</p>
                    <p className="text-sm font-medium">Phagwara, Punjab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-10 relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/5"
              style={{ color: "var(--text-muted)" }}
            >
              <FaTimes />
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-heading)" }}>Send a Message</h3>
              
              <div className="space-y-4 flex-1">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider pl-1" style={{ color: "var(--text-muted)" }}>Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sm opacity-30" />
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full bg-transparent border rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ 
                        borderColor: "var(--glass-border)", 
                        color: "var(--text-body)" 
                      }}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider pl-1" style={{ color: "var(--text-muted)" }}>Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm opacity-30" />
                    <input 
                      type="email" 
                      required
                      placeholder="hello@world.com"
                      className="w-full bg-transparent border rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ 
                        borderColor: "var(--glass-border)", 
                        color: "var(--text-body)" 
                      }}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider pl-1" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border rounded-2xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    style={{ 
                      borderColor: "var(--glass-border)", 
                      color: "var(--text-body)" 
                    }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full mt-8 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold tracking-wide transition-all active:scale-[0.98]"
                style={{ 
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
                }}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
