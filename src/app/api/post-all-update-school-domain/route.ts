import { NextResponse, NextRequest } from 'next/server';
import SchoolService from 'src/services/SchoolService';

export async function GET(_req: NextRequest) {
  try {
    const data = await SchoolService.postAllSchoolDomain();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

