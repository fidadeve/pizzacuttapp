import { NextRequest, NextResponse } from 'next/server';
import { addCartItem, getCart } from '@/lib/cart';

export async function GET(_req: NextRequest) {
  const cart = await getCart();
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await addCartItem(body.product_id, body.quantity);
  return NextResponse.json(item);
}
