import { STATS } from '@/data/clinic';

export default function TrustBar() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal rounded-3xl border border-ink-100 bg-white p-6 shadow-lift sm:p-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-display text-3xl font-700 text-teal-700 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm leading-snug text-ink-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
