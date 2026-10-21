import { NextRequest, NextResponse } from 'next/server';
import { getFaqs } from '@/lib/catalog';

export async function GET(req: NextRequest) {
  const faqs = await getFaqs();
  return NextResponse.json(faqs);
}
