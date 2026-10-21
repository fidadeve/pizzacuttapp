'use client';

/** Admin sidebar navigation with a mobile drawer. */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { useSession } from '@/components/auth/SessionContext';

const SECTIONS = [
  { href: '/admin', label: 'Overview', icon: '📊' },
  { href: '/admin/orders', label: 'Orders', icon: '🧾' },
  { href: '/admin/deliveries', label: 'Deliveries', icon: '🛵' },
  { href: '/admin/products', label: 'Products', icon: '🍕' },
  { href: '/admin/categories', label: 'Categories', icon: '🗂️' },
  { href: '/admin/toppings', label: 'Toppings', icon: '🧀' },
  { href: '/admin/offers', label: 'Offers', icon: '🏷️' },
  { href: '/admin/riders', label: 'Riders', icon: '🧑‍🚀' },
  { href: '/admin/customers', label: 'Customers', icon: '👥' },
  { href: '/admin/content', label: 'Pages & FAQs', icon: '📄' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export function AdminNav({ user }: { user: { name: string; email: string | null } }) {
  const pathname = usePathname();
  const { logout } = useSession();
  const [open, setOpen] = useState(false);

  const links = SECTIONS.map((section) => ({
    ...section,
    active: section.href === '/admin' ? pathname === '/admin' : pathname.startsWith(section.href),
  }));

  return (
    <>
      {/* mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-line bg-white px-4 py-3 lg:hidden">
        <button
          type="button"
          className="btn btn-ghost !min-h-9 !px-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <Logo size={34} wordmark={false} />
        <span className="font-display text-lg">Admin</span>
        <Link href="/" className="btn btn-ghost btn-xs ml-auto">
          View store ↗
        </Link>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setOpen(false)} aria-hidden />
      )}

      {/* sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-line bg-white transition-transform lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Admin navigation"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-4">
            <Logo size={40} />
            <button
              type="button"
              className="btn btn-ghost !min-h-8 !px-2 lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" onClick={() => setOpen(false)}>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="side-link" data-active={link.active}>
                    <span aria-hidden>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line px-4 py-4">
            <p className="truncate text-sm font-extrabold">{user.name}</p>
            <p className="truncate text-xs font-semibold text-muted">{user.email ?? 'Administrator'}</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/" className="btn btn-outline btn-xs">
                View storefront
              </Link>
              <button type="button" className="btn btn-ghost btn-xs !text-danger" onClick={() => void logout()}>
                Sign out
              </button>
              <p className="pt-2 text-[10px] font-semibold text-muted">
                Developed by{' '}
                <a href="tel:03326972158" className="font-extrabold text-brand">
                  Syed Fida Ullah
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
