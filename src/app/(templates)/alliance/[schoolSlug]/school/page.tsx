import { Metadata, NextPage } from 'next';
import { formatDomain } from 'src/utils/domain-utils';
import SchoolPage from './SchoolPage';
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
      description: `${translatedDetailPageRecordData?.masterSloganDescription}`,
      images: [`${translatedDetailPageRecordData?.masterImage}`],
    },
    themeColor: '#000000',
    keywords: [
      `${school?.schoolName} School`,
      `experimental class in ${school?.city}`,
      `experimental class in ${school?.state}`,
      `experimental class in ${school?.country}`,
      `satisfied students in ${school?.martialArtsLookup?.[0]}`,
    ],

    viewport: 'initial-scale=1, width=device-width',
  };
}

const HomePage: NextPage<SchoolDetailProps> = async (props) => {
  const { schoolData, phoneNumber } = await getPageProps(props?.params);

  const {
    studentMessagesData,
    translatedDetailPageRecordData,
    schoolImagesUrl,
    classesDivisionData,
    satisfiedStudentData,
    masterKeySloganData,
  } = await getAllTranslatedDataFromDB();
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'EducationalOrganization',
    name: `${schoolData?.schoolName}`,
    headline: `${translatedDetailPageRecordData?.masterSlogan}`,
    description: `${translatedDetailPageRecordData?.masterSloganDescription}`,
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `${schoolData?.phone}`,
      contactType: 'customer support',
    },
    hasMap: {
      '@type': 'Map',
      name: `${schoolData?.schoolName} Location`,
      url: 'https://example.com/school-location-map',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: `${schoolData?.lat}`,
        longitude: `${schoolData?.long}`,
      },
    },

    organizer: {
      '@type': 'Organization',
      name: `${schoolData?.schoolName}`,
      url: `https://${schoolData?.domainFromDomains?.[0]}.pk-sites.vercel.app/school`,
    },
  };
  return (
    <section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <SchoolPage
        schoolDetail={translatedDetailPageRecordData}
        phoneNumber={phoneNumber}
        messagesData={studentMessagesData}
        schoolImagesUrl={schoolImagesUrl}
        classDivisionsLevel={classesDivisionData}
        satisfiedStudentData={satisfiedStudentData}
        masterKeySloganData={masterKeySloganData}
      />
    </section>
  );
};
export default HomePage;
