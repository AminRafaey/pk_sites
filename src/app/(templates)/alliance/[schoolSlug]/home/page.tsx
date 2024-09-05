import { Metadata, NextPage } from 'next';
import { formatDomain } from 'src/utils/domain-utils';
import HomePageTemplate from './HomePage';
import { getAllTranslatedDataFromDB, getDataFromDB, getPageProps } from '../layout';

interface SchoolDetailProps {
  params: { schoolSlug: string };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const schoolSlug = params?.schoolSlug;
  const subdomain = formatDomain(schoolSlug as string);

  const school = await getDataFromDB(subdomain as string);
  const { translatedDetailPageRecordData } = await getAllTranslatedDataFromDB();
  return {
    openGraph: {
      title: `${school?.schoolName} • DOJO+` || 'DOJO+ sites',
      description: `${translatedDetailPageRecordData?.schoolSloganDescription}`,
      images: [`${translatedDetailPageRecordData?.schoolHallImage}`],
    },
    themeColor: '#000000',
    keywords: [
      `${school?.schoolName} Home`,
      `best school in ${school?.city}`,
      'best team in the world',
      `best school in ${school?.martialArtsLookup?.[0]}`,
    ],

    viewport: 'initial-scale=1, width=device-width',
  };
}

const HomePage: NextPage<SchoolDetailProps> = async (props, req) => {
  const { schoolData, phoneNumber } = await getPageProps(props?.params);

  const { studentMessagesData, translatedDetailPageRecordData, methodologyRecordArray } =
    await getAllTranslatedDataFromDB();

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'EducationalOrganization',
    name: schoolData?.schoolName,
    headline: `${translatedDetailPageRecordData?.schoolSlogan}`,
    description: `${translatedDetailPageRecordData?.schoolSloganDescription}`,
    image: `${translatedDetailPageRecordData?.schoolHallImage}`,
    url: `https://${schoolData?.domainFromDomains?.[0]}.pk-sites.vercel.app/home`,
    telephone: `${schoolData?.phone}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${schoolData?.address1}`,
      addressLocality: `${schoolData?.city}`,
      addressRegion: `${schoolData?.state}`,
      postalCode: `${schoolData?.zip}`,
      addressCountry: `${schoolData?.country}`,
    },
    sameAs: [`${schoolData?.instagram}`],
  };

  return (
    <section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <HomePageTemplate
        schoolData={schoolData}
        messagesData={studentMessagesData}
        schoolDetail={translatedDetailPageRecordData}
        phoneNumber={phoneNumber}
        methodologyRecordArray={methodologyRecordArray}
      />
    </section>
  );
};
export default HomePage;
