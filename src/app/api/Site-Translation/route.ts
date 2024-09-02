import { NextRequest, NextResponse } from 'next/server';
import SiteTranslationServices from 'src/services/SiteTranslationServices';

/**
 * @description - get full site translation data with theme.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return full site translation data of specific school name.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function GET(_req: NextRequest) {
  const schoolSlug: any = _req.nextUrl.searchParams.get('slug');
  const language = _req.nextUrl.searchParams.get('language')
  try {
    const translationData = await SiteTranslationServices.allPagesDetailTranslatedData(schoolSlug, language);
    return NextResponse.json(translationData);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
