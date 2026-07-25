import { MessageCircle, Phone, Star, ShieldCheck } from 'lucide-react';
import { whatsappLink, telLink } from '@/data/clinic';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37458147/pexels-photo-37458147.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Dentista especialista atendiendo a una paciente en la clínica Sonrisas de Córdoba"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-teal-950/30" />
      </div>

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl float-soft" />
      <div className="pointer-events-none absolute left-10 bottom-24 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-600 text-white/90 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            Centro odontológico especializado en Cereté
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-600 leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Especialistas en transformar tu sonrisa y cuidar tu salud dental en{' '}
            <span className="text-gradient-gold">Cereté</span>.
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
            Ortodoncia, diseño de sonrisa, endodoncia y rehabilitación oral con
            tecnología moderna y técnicas sin dolor. Tu valoración es el primer
            paso para recuperar tu confianza.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="shine relative flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-400 px-7 py-4 text-base font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.04]"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar valoración por WhatsApp
            </a>
            <a
              href={telLink()}
              className="flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-600 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              Llamar a la clínica
            </a>
          </div>

          {/* Trust chips */}
          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
                ))}
              </span>
              5.0 en reseñas de pacientes
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-300" />
              Atención sin dolor
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Respuesta en minutos por WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
