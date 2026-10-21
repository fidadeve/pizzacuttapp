import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 20px', lineHeight: 1.7 }}>
    <Link href="/">← Home</Link>
    <h1>Terms &amp; Conditions</h1>
    <p>This is a temporary test page for PizzaCut. By using this preview, you understand that features and content may be incomplete and test orders should not be treated as real purchases.</p>
    <p>No payment should be submitted through this preview. Any sample information entered should be considered test data.</p>
  </main>;
}
