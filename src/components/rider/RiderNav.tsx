'use client';

/** Rider portal header: identity, availability and sign out. */
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { useSession } from '@/components/auth/SessionContext';

export function RiderNav({ user }: { user: { name: string; phone: string; isOnline: boolean } }) {
  const { logout } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="flex items-center gap-3 px-4 py-3">
        <Logo size={36} wordmark={false} />
        <div className="min-w-0">
          <p className="truncate font-display text-lg leading-none">Rider Portal</p>
          <p className="truncate text-[11px] font-bold text-muted">{user.name}</p>
        </div>

        <span
          className={`ml-1 pill-badge ${user.isOnline ? 'bg-success-soft text-success' : 'bg-surface text-muted'}`}
        >
          {user.isOnline ? 'Online' : 'Offline'}
        </span>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/" className="btn btn-ghost btn-xs hidden sm:inline-flex">
            View store ↗
          </Link>
          <button
            type="button"
            className="btn btn-outline btn-xs"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 py-2 lg:hidden" aria-label="Rider">
          <Link href="/rider" className="side-link" onClick={() => setOpen(false)}>
            Deliveries
          </Link>
          <Link href="/" className="side-link" onClick={() => setOpen(false)}>
            View storefront
          </Link>
          <button type="button" className="side-link w-full text-left !text-danger" onClick={() => void logout()}>
            Sign out
          </button>
          <p className="px-3 pb-2 pt-1 text-[11px] font-semibold text-muted">
            Developed by{' '}
            <a href="tel:03326972158" className="font-extrabold text-brand">
              Syed Fida Ullah
            </a>{' '}
            · 03326972158
          </p>
        </nav>
      )}
    </header>
  );
}
