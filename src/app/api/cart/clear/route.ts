import { NextRequest, NextResponse } from 'next/server';
import { clearCart } from '@/lib/cart';

export async function DELETE(req: NextRequest) {
  await clearCart();
  return NextResponse.json({ success: true });
}
