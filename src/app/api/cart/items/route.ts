import { NextRequest, NextResponse } from 'next/server';
import { addCartItem } from '@/lib/cart';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await addCartItem(body.product_id, body.quantity);
  return NextResponse.json(item);
}
