import { ShieldCheck, MapPin, Award } from 'lucide-react';
import { VALUE_PROPS, whatsappLink } from '@/data/clinic';

const ICONS = { ShieldCheck, MapPin, Award } as const;

export default function ValueProps() {
  return (
    <section id="diferenciadores" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.18em] text-teal-600">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 font-display text-3xl font-600 leading-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            No es solo una limpieza. Es una experiencia pensada para tu bienestar.
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-pretty">
            En Sonrisas de Córdoba combinamos especialistas certificados, tecnología
            moderna y trato cercano para que tu visita sea segura, cómoda y sin dolor.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = ICONS[prop.icon as keyof typeof ICONS];
            return (
              <div
                key={prop.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-4xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-600 text-ink-900">
                  {prop.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500">{prop.text}</p>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-teal-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Objection handling strip */}
        <div className="reveal mt-10 overflow-hidden rounded-4xl gradient-teal px-6 py-10 text-white sm:px-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-display text-2xl font-600 sm:text-3xl text-balance">
                ¿Preocupado por el costo o por el dolor?
              </h3>
              <p className="mt-3 text-white/85 text-pretty">
                Tu valoración inicial es el primer paso: un diagnóstico claro y un
                presupuesto transparente, sin compromiso. Y porque sabemos que el
                miedo es real, trabajamos con técnicas modernas y anestesia avanzada
                para que la experiencia sea tranquila de principio a fin.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-gold-400 px-6 py-3.5 text-base font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.03]"
              >
                Quiero mi valoración
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
