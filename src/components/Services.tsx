import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, whatsappLink } from '@/data/clinic';

export default function Services() {
  return (
    <section id="servicios" className="relative gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.18em] text-teal-600">
            Nuestros servicios
          </span>
          <h2 className="mt-3 font-display text-3xl font-600 leading-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Todo lo que necesita tu sonrisa, en un solo lugar.
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-pretty">
            Cinco especialidades bajo el mismo techo para que no tengas que
            desplazarte entre clínicas. Si tu problema tiene solución, la tenemos aquí.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex flex-col overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift`}
            >
              <div className="zoom-wrap relative h-52">
                <img
                  src={s.image}
                  alt={s.name}
                  className="zoom-img h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl font-600 text-white">
                  {s.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-ink-500">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hola Sonrisas de Córdoba, me interesa el tratamiento de ${s.name}. ¿Me pueden dar más información?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-1.5 text-sm font-600 text-teal-700 transition-colors hover:text-teal-900"
                >
                  Consultar por este tratamiento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}

          {/* CTA tile */}
          <div className="reveal reveal-delay-3 flex flex-col items-start justify-center rounded-4xl gradient-teal p-8 text-white">
            <h3 className="font-display text-2xl font-600 text-balance">
              ¿No sabes qué tratamiento necesitas?
            </h3>
            <p className="mt-3 text-white/85 text-pretty">
              Agenda una valoración y nuestros especialistas te orientan con un
              diagnóstico claro y un plan a tu medida.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.03]"
            >
              Agendar valoración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
