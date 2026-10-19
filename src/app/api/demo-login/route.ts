import { NextRequest, NextResponse } from 'next/server';
import { api } from '@/lib/api-client';
import { setTokens } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const response = await api.post<{
      user: { id: string; email: string; firstName: string; lastName: string; role: string; tenantId: string };
      accessToken: string;
      refreshToken: string;
    }>('/auth/login', {
      email: 'owner@demo-clinic.com',
      password: 'password123',
    });

    const payload: any = response.data;
    const authData = payload?.data ?? payload;
    const { user, accessToken, refreshToken } = authData;

    if (!user) {
      return NextResponse.json({ error: 'Demo login failed' }, { status: 401 });
    }

    setTokens({ accessToken, refreshToken }, user);

    return NextResponse.json({ success: true, user });
  } catch (error: unknown) {
    console.error('Demo login error:', error);
    return NextResponse.json({ error: 'Demo login failed' }, { status: 401 });
  }
}