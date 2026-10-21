import { NextResponse } from 'next/server';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return new Response('Media placeholder: ' + id, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
