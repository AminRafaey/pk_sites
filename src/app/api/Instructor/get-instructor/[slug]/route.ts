import PeopleService from 'src/services/PeopleService';
import { NextResponse, NextRequest } from 'next/server';

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function GET(_req: NextRequest, context: { params: { slug: string } }) {
    try {
        const data = await PeopleService.getMasterDetail({
            value: context?.params?.slug,
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }

}

