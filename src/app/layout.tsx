import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PizzaCut — Pizza Ordering',
  description: 'PizzaCut free test preview for checking the storefront and navigation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
