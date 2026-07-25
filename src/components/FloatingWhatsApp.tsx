import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/data/clinic';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar valoración por WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lift transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-700 sm:inline">Agenda tu valoración</span>
    </a>
  );
}
