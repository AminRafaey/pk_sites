import { NextResponse } from 'next/server';
import SubdomainsServices from 'src/services/SubdomainsServices';

export async function GET() {
  try {
    const data = await SubdomainsServices.getAllSubDomains();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
