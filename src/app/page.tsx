import { Metadata } from 'next';
// config
import IndexHomePage from 'src/sections/index-page';
import { API_ROUTES } from 'src/utils/api-routes';
import { appFetch } from 'src/utils/fetch';

export default async function HomePage() {
  const domains: any = await appFetch(`${API_ROUTES.getAllDomains}/`);
  return <IndexHomePage domainsData={domains} />;
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  other: {
    'google-site-verification': 'CGvYHGehAUz_64MDaRZ7pVVMn4wy66aIe94BdZeXW48',
  },
};
