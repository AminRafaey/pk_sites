import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import CustomerServices from '../../../../services/CustomerServices';
import { PostmarkService } from '../../../../services/PostmarkService';

/**
 * @description - get seminars data against a specific user.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return seminars data against a specific user.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function POST(req: NextRequest, res: NextApiResponse) {
  const data = await req.json();
  try {
    const customer = data as any;
    const school = await CustomerServices.getAllSchoolData(data.School);
    await CustomerServices.signUpFreeClasses(data, school);
    PostmarkService.sendEmail({
      From: `${customer?.School} <noreply@dojoplus.email>`,
      To: customer.Email,
      Subject: `Hello from ${school?.[0]?.fields?.['School Name']}`,
      HtmlBody: `Hey ${customer?.['Full Name']},<br /><br />Our team at <b>${school?.[0]?.fields?.['School Name']}</b> is waiting for you.<br /><br />See you soon.<br /><br />OSS<br /><br>${school?.[0]?.fields?.['School Name']}<br />${school?.[0]?.fields?.['Full Address']}`,
      TextBody: `Hey ${customer?.['Full Name']}, Our team at ${school?.[0]?.fields?.['School Name']} is waiting for you. See you soon. OSS`,
      MessageStream: 'outbound',
    });

    PostmarkService.sendEmail({
      From: `DOJO+ <noreply@dojoplus.email>`,
      To: school?.[0]?.fields?.Email,
      Subject: `Booking confirm for ${customer?.['Full Name']}`,
      HtmlBody: `Hey ${school?.[0]?.fields?.['School Name']},<br /><br />You got a new booking from ${customer?.['Full Name']} <${customer?.Email}><br /><br />Customer additional info: ${customer?.Phone}`,
      TextBody: `Hey ${school?.[0]?.fields?.['School Name']}, You got a new booking from ${customer?.['Full Name']} <${customer?.Email}>. Customer additional info: ${customer?.Phone}`,
      MessageStream: 'outbound',
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
