import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20AVANA%2C%20I%27d%20like%20to%20know%20more%20about%20your%20projects."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AVANA on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center"
    >
      <span className="animate-pulse-slow absolute inset-0 rounded-full" />
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/20">
        <MessageCircle className="text-white" size={26} fill="white" />
      </span>
      <span className="absolute right-16 whitespace-nowrap bg-charcoal-deep text-ivory text-xs eyebrow px-3 py-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat With Us
      </span>
    </a>
  );
}
