import { Metadata, NextPage } from 'next';
import { appFetch } from 'src/utils/fetch';
import { API_ROUTES } from 'src/utils/api-routes';
import { notFound } from 'next/navigation';
import { formatDomain } from 'src/utils/domain-utils';
import { getAllTranslatedDataFromDB, getDataFromDB, getPageProps } from './layout';
import TrainerPage from './TrainerPage';

interface SchoolDetailProps {
  params: { schoolSlug: string };
}

const getTrainerProps = async (params: any): Promise<{ schoolData: any; instructorData: any }> => {
  const { schoolData } = await getPageProps(params);

  try {
    if (schoolData?.displayNameFromInstructor) {
      const apiRequests = schoolData?.displayNameFromInstructor?.map(async (username: any) => {
        const getInstructorNameBelt = await appFetch(
          `${API_ROUTES.getInstructorNameBelt}/${username}`
        );
        return getInstructorNameBelt;
      });
      const instructorData = await Promise?.all(apiRequests);
      return { schoolData, instructorData };
    }

    return { schoolData, instructorData: [] };
  } catch (error) {
    console.error('Error fetching data:', error);
    notFound();
    return { schoolData: {}, instructorData: [] };
  }
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const schoolSlug = params?.schoolSlug;
  const subdomain = formatDomain(schoolSlug as string);

  const school = await getDataFromDB(subdomain as string);
  const { translatedDetailPageRecordData } = await getAllTranslatedDataFromDB();
  return {
    openGraph: {
      title: `${school?.schoolName} • DOJO+` || 'DOJO+ sites',
      description: `${translatedDetailPageRecordData?.trainerPage?.trainerBioData}`,
      images: [`${translatedDetailPageRecordData?.bannerBackgroundImage}`],
    },
    themeColor: '#000000',
    keywords: [
      `${school?.schoolName} Trainer`,
      `trainer in ${school?.city}`,
      `trainer class in ${school?.state}`,
      `trainer class in ${school?.country}`,
      `trainer in ${school?.martialArtsLookup?.[0]}`,
    ],

    viewport: 'initial-scale=1, width=device-width',
  };
}

const IndexPage: NextPage<SchoolDetailProps> = async (props) => {
  const { schoolData, instructorData } = await getTrainerProps(props.params);
  const { translatedDetailPageRecordData } = await getAllTranslatedDataFromDB();
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'EducationalOrganization',
    name: `${schoolData?.schoolName}`,
    headline: `${translatedDetailPageRecordData?.typeOfMartialArt}`,
    description: `${translatedDetailPageRecordData?.trainerBioData}`,
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
      url: `https://${schoolData?.domainFromDomains?.[0]}.vintagetoons/school`,
    },
  };
  return (
    <section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <TrainerPage
        schoolDetail={translatedDetailPageRecordData}
        selectedSchool={schoolData}
        instructorData={instructorData}
      />
    </section>
  );
};
export default IndexPage;
