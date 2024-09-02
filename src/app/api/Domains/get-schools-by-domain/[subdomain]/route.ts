import { NextRequest, NextResponse } from 'next/server';
import SubdomainsServices from 'src/services/SubdomainsServices';

export async function GET(_req: NextRequest, context: { params: { subdomain: string } }) {
  try {
    // console.log('_req', _req.nextUrl.searchParams.get('queryParam')?.[0]); // search params get method
    const data = await SubdomainsServices.getSchoolByDomain(context?.params?.subdomain);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
