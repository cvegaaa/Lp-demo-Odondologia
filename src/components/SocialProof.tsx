import { Star, Quote } from 'lucide-react';
import BeforeAfter from './BeforeAfter';
import { TESTIMONIALS } from '@/data/clinic';

export default function SocialProof() {
  return (
    <section id="resultados" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.18em] text-teal-600">
            Resultados reales
          </span>
          <h2 className="mt-3 font-display text-3xl font-600 leading-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            No compres un tratamiento. Compra la sonrisa final.
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-pretty">
            Estos son algunos de los resultados que hemos logrado con nuestros
            pacientes en Córdoba. Arrastra las imágenes para ver la transformación.
          </p>
        </div>

        {/* Before / After gallery */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <BeforeAfter
            label="Diseño de Sonrisa"
            before="https://images.pexels.com/photos/3820424/pexels-photo-3820424.jpeg?auto=compress&cs=tinysrgb&w=800"
            after="https://images.pexels.com/photos/3946835/pexels-photo-3946835.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <BeforeAfter
            label="Ortodoncia"
            before="https://images.pexels.com/photos/6627353/pexels-photo-6627353.jpeg?auto=compress&cs=tinysrgb&w=800"
            after="https://images.pexels.com/photos/5355903/pexels-photo-5355903.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <BeforeAfter
            label="Rehabilitación Oral"
            before="https://images.pexels.com/photos/4269494/pexels-photo-4269494.jpeg?auto=compress&cs=tinysrgb&w=800"
            after="https://images.pexels.com/photos/4270379/pexels-photo-4270379.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <div className="reveal mb-8 text-center">
            <h3 className="font-display text-2xl font-600 text-ink-900 sm:text-3xl">
              Lo que dicen nuestros pacientes
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className={`reveal reveal-delay-${i + 1} relative rounded-4xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift`}
              >
                <Quote className="h-8 w-8 text-teal-200" />
                <div className="mt-3 flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-ink-700 text-pretty">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 font-display text-lg font-700 text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-700 text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-400">{t.treatment}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
