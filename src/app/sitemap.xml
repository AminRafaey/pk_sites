import { appFetch } from 'src/utils/fetch';
import { API_ROUTES } from 'src/utils/api-routes';

const createSitemapField = (suffix: string): any => ({
  url: suffix,
  lastModified: new Date().toISOString(),
});

export default async function Sitemap() {
  const domains: any = await appFetch(`${API_ROUTES.getAllDomains}/`);
  const suffixes = ['/', '/home', '/school', '/schedule', '/contact-us'];

  const fields = domains.flatMap(({ domain }: any) =>
    suffixes.map((suffix) => createSitemapField(`https://${domain}.vintagetoons${suffix}`))
  );
  return [createSitemapField(`https:/vintagetoons`), ...fields];
}
