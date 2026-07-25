import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { CLINIC, whatsappLink, telLink } from '@/data/clinic';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.18em] text-teal-600">
            Inicia tu tratamiento hoy
          </span>
          <h2 className="mt-3 font-display text-3xl font-600 leading-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Escríbenos y da el primer paso hacia tu nueva sonrisa.
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-pretty">
            Estamos en el centro de Cereté. Un mensaje basta para agendar tu
            valoración — sin formularios, sin esperas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Info card */}
          <div className="reveal flex flex-col justify-between rounded-4xl border border-ink-100 bg-white p-8 shadow-soft sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-600 text-ink-900">
                Centro Odontológico Especializado Sonrisas de Córdoba
              </h3>
              <p className="mt-2 text-ink-500">{CLINIC.city}</p>

              <ul className="mt-8 space-y-5">
                <InfoRow icon={<MapPin className="h-5 w-5" />} label="Dirección">
                  {CLINIC.address}
                </InfoRow>
                <InfoRow icon={<Phone className="h-5 w-5" />} label="Teléfono">
                  <a href={telLink()} className="hover:text-teal-700">
                    {CLINIC.phoneDisplay}
                  </a>
                </InfoRow>
                <InfoRow icon={<Mail className="h-5 w-5" />} label="Correo">
                  <a href={`mailto:${CLINIC.email}`} className="hover:text-teal-700">
                    {CLINIC.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5" />} label="Horarios">
                  <div className="space-y-1">
                    {CLINIC.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-6 text-sm">
                        <span className="font-600 text-ink-700">{h.day}</span>
                        <span className="text-ink-500">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </InfoRow>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="shine relative flex flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-400 px-6 py-4 text-base font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={telLink()}
                className="flex flex-1 items-center justify-center gap-2.5 rounded-full border border-ink-200 px-6 py-4 text-base font-600 text-ink-700 transition-colors hover:border-teal-300 hover:text-teal-700"
              >
                <Phone className="h-5 w-5" />
                Llamar ahora
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal overflow-hidden rounded-4xl border border-ink-100 shadow-soft">
            <iframe
              title="Ubicación de Sonrisas de Córdoba en Cereté"
              src={CLINIC.mapsEmbed}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
        {icon}
      </span>
      <div className="flex-1">
        <div className="text-xs font-600 uppercase tracking-wider text-ink-400">{label}</div>
        <div className="mt-1 text-base text-ink-700">{children}</div>
      </div>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700">
                <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path
                    d="M32 14c-6 0-10 3-14 3-2 0-4-1-6-1-1 0-2 1-2 3 0 6 3 10 5 16 1 3 2 8 5 8 3 0 3-5 5-5s2 5 5 5c3 0 4-5 5-8 2-6 5-10 5-16 0-2-1-3-2-3-2 0-4 1-6 1-4 0-8-3-14-3Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span className="font-display text-lg font-600 text-white">Sonrisas de Córdoba</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Centro odontológico especializado en Cereté, Córdoba. Transformamos
              sonrisas con tecnología moderna y trato humano.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal-700">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-700 uppercase tracking-wider text-white">Servicios</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-teal-300">Ortodoncia</a></li>
              <li><a href="#servicios" className="hover:text-teal-300">Diseño de Sonrisa</a></li>
              <li><a href="#servicios" className="hover:text-teal-300">Endodoncia</a></li>
              <li><a href="#servicios" className="hover:text-teal-300">Rehabilitación Oral</a></li>
              <li><a href="#servicios" className="hover:text-teal-300">Odontología General</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-700 uppercase tracking-wider text-white">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{CLINIC.address}</li>
              <li><a href={telLink()} className="hover:text-teal-300">{CLINIC.phoneDisplay}</a></li>
              <li><a href={`mailto:${CLINIC.email}`} className="hover:text-teal-300">{CLINIC.email}</a></li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-700 text-ink-900 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Agendar valoración
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Sonrisas de Córdoba. Todos los derechos reservados.</p>
          <p>
            Propuesta de muestra desarrollada por{' '}
            <span className="font-600 text-white/70">Vegora</span> · Diseñamos el cambio
          </p>
        </div>
      </div>
    </footer>
  );
}
