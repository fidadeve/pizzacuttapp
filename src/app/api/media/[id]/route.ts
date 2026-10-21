import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // Serve media file
  return new Response('Media placeholder', {
    headers: { 'Content-Type': 'application/octet-stream' },
  });
}
