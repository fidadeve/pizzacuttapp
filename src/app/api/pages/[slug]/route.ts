import { NextResponse } from 'next/server';
import { getPage } from '@/lib/catalog';

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);
  return NextResponse.json(page);
}
