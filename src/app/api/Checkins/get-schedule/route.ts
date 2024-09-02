
import { NextResponse, NextRequest } from 'next/server';
import CheckIns from 'src/services/CheckIns';

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function GET(_req: NextRequest) {

    const data = await CheckIns.getCurrentSchoolClasses(
        _req.nextUrl.searchParams.get('schoolName') as string,
        _req.nextUrl.searchParams.get('allWeek') as any,

    );
    return NextResponse.json(data);

}

