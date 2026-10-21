import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { getSettings } from '@/lib/settings';

/**
 * Storefront footer — navigation, policy links, contact details and the
 * required developer credit. Server-rendered so the copyright year is always
 * current and the phone/email links are crawlable.
 */
export async function Footer() {
  const settings = await getSettings();
  const year = new Date().getFullYear();
  const phone = settings.store.phone;
  const email = settings.store.email;
  const telHref = `tel:${phone.replace(/[^+\d]/g, '')}`;

  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo size={52} />
          <p className="max-w-xs text-sm font-semibold text-muted">
            {settings.store.tagline} — hot, fresh pizza delivered across {settings.store.address.split(',').slice(-2)[0]?.trim() ?? 'your city'}.
          </p>
          <div className="flex gap-3 text-sm font-extrabold">
            {settings.store.instagram ? (
              <a href={settings.store.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                Instagram
              </a>
            ) : null}
            {settings.store.facebook ? (
              <a href={settings.store.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                Facebook
              </a>
            ) : null}
          </div>
        </div>

        <nav aria-label="Explore">
          <h3 className="mb-3 text-base">Explore</h3>
          <ul className="space-y-2 text-sm font-semibold text-muted">
            <li><Link href="/menu" className="hover:text-brand">Full menu</Link></li>
            <li><Link href="/offers" className="hover:text-brand">Offers & deals</Link></li>
            <li><Link href="/track" className="hover:text-brand">Track your order</Link></li>
            <li><Link href="/about" className="hover:text-brand">About us</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact us</Link></li>
            <li><Link href="/faqs" className="hover:text-brand">FAQs</Link></li>
          </ul>
        </nav>

        <nav aria-label="Policies">
          <h3 className="mb-3 text-base">Policies</h3>
          <ul className="space-y-2 text-sm font-semibold text-muted">
            <li><Link href="/privacy-policy" className="hover:text-brand">Privacy policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-brand">Terms & conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-brand">Refund & cancellation</Link></li>
            <li><Link href="/delivery-policy" className="hover:text-brand">Delivery policy</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-3 text-base">Order & support</h3>
          <ul className="space-y-2 text-sm font-semibold text-muted">
            <li>
              <a href={telHref} className="hover:text-brand">
                {phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-brand">
                {email}
              </a>
            </li>
            <li>{settings.store.address}</li>
            <li>{settings.store.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-xs font-semibold text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.store.storeName}. All rights reserved.
          </p>
          <p className="text-charcoal">
            Developed by{' '}
            <span className="font-extrabold">Syed Fida Ullah</span>
            {' · Contact: '}
            <a href="tel:03326972158" className="font-extrabold text-brand hover:underline">
              03326972158
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
