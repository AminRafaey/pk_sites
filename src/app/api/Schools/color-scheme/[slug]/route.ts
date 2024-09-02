import { NextResponse, NextRequest } from 'next/server';

export async function GET(_req: NextRequest, context: { params: { slug: string } }) {
  try {
    const data = context;
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
