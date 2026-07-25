import { useRef, useState, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface Props {
  before: string;
  after: string;
  label: string;
}

export default function BeforeAfter({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div className="reveal overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-soft">
      <div
        ref={wrapRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden ba-handle"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        {/* After (full) */}
        <img
          src={after}
          alt={`Después - ${label}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-teal-700/90 px-3 py-1 text-xs font-700 text-white">
          Después
        </span>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`Antes - ${label}`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }}
            loading="lazy"
            draggable={false}
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-700 text-white">
            Antes
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="h-full w-0.5 bg-white/90 shadow" />
          <span className="absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-teal-700 text-white shadow-lift">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="px-5 py-3 text-center text-sm font-600 text-ink-500">
        {label} — arrastra para ver el antes y después
      </div>
    </div>
  );
}
