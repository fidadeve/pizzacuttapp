import Link from 'next/link';

const links = [
  { href: '/menu', title: 'Browse Menu', description: 'Explore the menu and test the storefront.' },
  { href: '/track', title: 'Track Order', description: 'Open the order tracking test page.' },
  { href: '/terms-and-conditions', title: 'Terms & Conditions', description: 'Review the sample terms page.' },
  { href: '/admin', title: 'Admin Preview', description: 'Open the admin dashboard placeholder.' },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', padding: '28px 18px 40px', background: 'linear-gradient(180deg,#fff 0%,#fff5f5 100%)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <div aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 14, background: '#FF0018', color: '#fff', fontWeight: 900, fontSize: 23 }}>P</div>
          <div><div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-.04em' }}>PizzaCut</div><div style={{ color: '#666', fontSize: 12 }}>TEST PREVIEW</div></div>
          <span style={{ marginLeft: 'auto', border: '1px solid #ffd4d8', background: '#fff', color: '#c90015', borderRadius: 999, padding: '7px 11px', fontSize: 12, fontWeight: 700 }}>Preview build</span>
        </header>
        <section style={{ borderRadius: 28, padding: 'clamp(24px,6vw,56px)', background: '#171717', color: '#fff', overflow: 'hidden' }}>
          <p style={{ margin: '0 0 12px', color: '#ff6574', fontWeight: 800, letterSpacing: '.12em', fontSize: 12 }}>PIZZA • MADE SIMPLE</p>
          <h1 style={{ maxWidth: 650, margin: '0 0 18px', fontSize: 'clamp(38px,8vw,72px)', lineHeight: .98, letterSpacing: '-.06em' }}>Your PizzaCut test site is live.</h1>
          <p style={{ maxWidth: 580, color: '#dedede', lineHeight: 1.7, marginBottom: 28 }}>This is a free testing preview of the current repository. Open the pages below to check navigation and layout. Ordering, admin operations, authentication, and database workflows still need end-to-end verification.</p>
          <Link href="/menu" style={{ display: 'inline-block', padding: '13px 20px', borderRadius: 12, background: '#FF0018', color: '#fff', textDecoration: 'none', fontWeight: 800 }}>Open menu →</Link>
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 14, marginTop: 20 }}>
          {links.map((item) => <Link key={item.href} href={item.href} style={{ textDecoration: 'none', background: '#fff', border: '1px solid #eee', borderRadius: 18, padding: 20, boxShadow: '0 8px 24px #17171708' }}><div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{item.title} <span style={{ color: '#FF0018' }}>↗</span></div><div style={{ color: '#666', fontSize: 14, lineHeight: 1.55 }}>{item.description}</div></Link>)}
        </section>
        <footer style={{ marginTop: 44, paddingTop: 18, borderTop: '1px solid #eee', color: '#777', fontSize: 12, lineHeight: 1.8 }}>© {new Date().getFullYear()} PizzaCut · Testing only<br />Developed by Syed Fida Ullah · 03326972158</footer>
      </div>
    </main>
  );
}
