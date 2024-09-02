import { NextRequest, NextResponse } from 'next/server';
import SchoolService from '../../../../../services/SchoolService';

export async function GET(_req: NextRequest, context: { params: { slug: string } }) {
  try {
    const data = await SchoolService.getSchoolBySlug(context?.params?.slug);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
