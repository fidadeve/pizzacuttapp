import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '@/lib/orders/service';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const order = await createOrder(body.items, body.address);
  return NextResponse.json({ success: true, order });
}
