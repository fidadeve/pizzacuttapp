import { NextRequest, NextResponse } from 'next/server';
import { login } from '@/lib/auth/users';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await login(body.email, body.password);
  return NextResponse.json({ success: true, user });
}
