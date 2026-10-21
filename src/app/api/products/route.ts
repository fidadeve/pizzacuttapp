import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/catalog';

export async function GET(_req: NextRequest) {
  const products = await getProducts();
  return NextResponse.json(products);
}
