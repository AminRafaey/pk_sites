import { Metadata, NextPage } from 'next';
import { API_ROUTES } from 'src/utils/api-routes';
import { appFetch } from 'src/utils/fetch';
import { formatDomain } from 'src/utils/domain-utils';
import { getAllTranslatedDataFromDB, getDataFromDB, getPageProps } from '../layout';
import SchedulesPage from './SchedulesPage';

interface SchedulesDetailProps {
  params: { schoolSlug: string };
}

const getScheduleDetail = async (
  params: any
): Promise<{ scheduleDetail: any; schoolData: any }> => {
  const { schoolData } = await getPageProps(params);

  const queryParams = new URLSearchParams({
    schoolName: schoolData?.slug,
    allWeek: 'true',
  });

  try {
    if (schoolData) {
      const scheduleDetail = await appFetch(
        `${API_ROUTES.getScheduleData}?${queryParams.toString()}`
      );
      return { scheduleDetail, schoolData };
    }

    return { scheduleDetail: {}, schoolData };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { scheduleDetail: {}, schoolData };
  }
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const schoolSlug = params?.schoolSlug;
  const subdomain = formatDomain(schoolSlug as string);

  const school = await getDataFromDB(subdomain as string);
  return {
    openGraph: {
      title: `Schedules ${school?.schoolName} • DOJO+` || 'DOJO+ sites',
      description: 'Hosted with ❤️ by Dojoplus',
    },
    themeColor: '#000000',
    keywords: [
      `${school?.schoolName} Schedules`,
      `class schedules in ${school?.city}`,
      `class schedules in ${school?.state}`,
      `class schedules in ${school?.country}`,
      'best team schedules',
      `best school schedules in ${school?.martialArtsLookup?.[0]}`,
    ],

    viewport: 'initial-scale=1, width=device-width',
  };
}

const HomePage: NextPage<SchedulesDetailProps> = async (props) => {
  const { scheduleDetail, schoolData } = await getScheduleDetail(props.params);
  const { translatedDetailPageRecordData } = await getAllTranslatedDataFromDB();
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
      <SchedulesPage scheduleData={scheduleDetail} schoolDetail={translatedDetailPageRecordData} />
    </section>
  );
};
export default HomePage;

