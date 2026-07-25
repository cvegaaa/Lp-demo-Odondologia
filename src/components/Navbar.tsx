import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CLINIC, whatsappLink, telLink } from '@/data/clinic';

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué elegirnos', href: '#diferenciadores' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-soft border-b border-ink-100'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={CLINIC.name}>
          <LogoMark scrolled={scrolled} />
          <span
            className={[
              'font-display text-lg font-600 tracking-tight transition-colors',
              scrolled ? 'text-ink-900' : 'text-white',
            ].join(' ')}
          >
            Sonrrisas
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={[
                'text-sm font-500 transition-colors hover:text-teal-600',
                scrolled ? 'text-ink-600' : 'text-white/85',
              ].join(' ')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className={[
              'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-600 transition-all',
              scrolled
                ? 'border-ink-200 text-ink-700 hover:border-teal-300 hover:text-teal-700'
                : 'border-white/30 text-white hover:border-white/60',
            ].join(' ')}
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shine relative flex items-center gap-2 overflow-hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-700 text-ink-900 shadow-gold transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar valoración
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
            scrolled ? 'text-ink-900' : 'text-white',
          ].join(' ')}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out',
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-white p-5 shadow-lift">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-100 py-3 text-base font-500 text-ink-700 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={telLink()}
              className="flex items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-3 text-sm font-600 text-ink-700"
            >
              <Phone className="h-4 w-4" /> Llamar a la clínica
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-700 text-ink-900 shadow-gold"
            >
              <MessageCircle className="h-4 w-4" /> Agendar valoración
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoMark({ scrolled }: { scrolled: boolean }) {
  return (
    <span
      className={[
        'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors',
        scrolled ? 'bg-teal-700' : 'bg-white/15 ring-1 ring-white/30',
      ].join(' ')}
    >
      <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M32 14c-6 0-10 3-14 3-2 0-4-1-6-1-1 0-2 1-2 3 0 6 3 10 5 16 1 3 2 8 5 8 3 0 3-5 5-5s2 5 5 5c3 0 4-5 5-8 2-6 5-10 5-16 0-2-1-3-2-3-2 0-4 1-6 1-4 0-8-3-14-3Z"
          fill="#ffffff"
        />
        <circle cx="24" cy="28" r="2" fill={scrolled ? '#0f766e' : '#0f766e'} />
      </svg>
    </span>
  );
}
