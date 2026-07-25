import { MessageCircle } from 'lucide-react';
import { STEPS, whatsappLink } from '@/data/clinic';

export default function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden gradient-mesh py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.18em] text-teal-300">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-600 leading-tight text-balance sm:text-4xl lg:text-5xl">
            Recuperar tu sonrisa es más fácil de lo que crees.
          </h2>
          <p className="mt-4 text-lg text-white/80 text-pretty">
            Tres pasos simples. Sin formularios largos, sin esperas. Todo empieza
            con un mensaje.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[4.5rem] top-9 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-teal-400/60 to-transparent md:block" />
              )}
              <div className="relative flex h-18 w-18 items-center justify-center rounded-3xl glass font-display text-2xl font-700 text-teal-200">
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-600 text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/75 text-pretty">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shine relative flex items-center gap-2.5 overflow-hidden rounded-full bg-gold-400 px-8 py-4 text-base font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.04]"
          >
            <MessageCircle className="h-5 w-5" />
            Empezar ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
