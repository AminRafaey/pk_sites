import { NextResponse, NextRequest } from 'next/server';
import SubdomainsServices from 'src/services/SubdomainsServices';

/**
 * @description - get School Domain after send request to Airtable.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return Specific Domain Data.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function GET(_req: NextRequest, context: { params: { getdomain: string } }) {
    try {
        const data = await SubdomainsServices.getMainDomainHostName({
            value: context?.params?.getdomain,
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }

}

