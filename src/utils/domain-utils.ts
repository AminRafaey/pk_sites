import { NEXT_PUBLIC_ROOT_DOMAIN } from "./env-config";

export function formatDomain(schoolSlug: string) {
  const localHostSuffix = '.localhost:8084';
  const rootDomainSuffix = `.${NEXT_PUBLIC_ROOT_DOMAIN}`;
  let subdomain;

  if (schoolSlug.includes(localHostSuffix)) {
    subdomain = schoolSlug.endsWith(localHostSuffix)
      ? schoolSlug.replace(localHostSuffix, '')
      : schoolSlug;
  } else {
    subdomain = schoolSlug.endsWith(rootDomainSuffix)
      ? schoolSlug.replace(rootDomainSuffix, '')
      : schoolSlug;
  }

  return subdomain;
}