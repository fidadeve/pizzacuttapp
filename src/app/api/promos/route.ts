import { NextRequest, NextResponse } from 'next/server';
import { getPromos } from '@/lib/catalog';

export async function GET(req: NextRequest) {
  const promos = await getPromos();
  return NextResponse.json(promos);
}
