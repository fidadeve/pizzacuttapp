import { NextResponse } from 'next/server';
import { removeCartItem } from '@/lib/cart';

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await removeCartItem(id);
  return NextResponse.json({ success: true });
}
