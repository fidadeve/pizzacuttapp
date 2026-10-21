import { NextRequest, NextResponse } from 'next/server';
import { getPage } from '@/lib/catalog';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);
  return NextResponse.json(page);
}
