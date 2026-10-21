import { NextRequest, NextResponse } from 'next/server';
import { removeCartItem } from '@/lib/cart';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await removeCartItem(params.id);
  return NextResponse.json({ success: true });
}
