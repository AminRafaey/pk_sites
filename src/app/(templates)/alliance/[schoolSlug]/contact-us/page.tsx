import { Metadata, NextPage } from 'next';
import { formatDomain } from 'src/utils/domain-utils';
import ContactUs from './ContactUs';
import { getAllTranslatedDataFromDB, getDataFromDB, getPageProps } from '../layout';

interface SchoolDetailProps {
  params: { schoolSlug: string };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const schoolSlug = params?.schoolSlug;
  const subdomain = formatDomain(schoolSlug as string);

  const school = await getDataFromDB(subdomain as string);
  return {
    openGraph: {
      title: `Contact Us ${school?.schoolName} • DOJO+` || 'DOJO+ sites',
      description: 'Hosted with ❤️ by Dojoplus',
    },
    themeColor: '#000000',
    keywords: [
      `${school?.schoolName} Contact Us`,
      `${school?.schoolName} phone`,
      `${school?.address1}`,
      `${school?.fullAddress}`,
      `${school?.location}`,
    ],

    viewport: 'initial-scale=1, width=device-width',
  };
}

const ContactUsPage: NextPage<SchoolDetailProps> = async (props) => {
  const { schoolData } = await getPageProps(props.params);
  const { translatedDetailPageRecordData } = await getAllTranslatedDataFromDB();
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'EducationalOrganization',
    name: `${schoolData?.schoolName}`,
    headline: `Get in touch with us`,
    description:
      'Alliance is undeniably formed by the best team in the world. We represent technical quality, professionalism, and highly qualified instructors. Train with our exclusive and internationally proven methodology. Thousands of satisfied students since the first class',
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
      url: `https://${schoolData?.domainFromDomains?.[0]}.dojoplus.site/contact-us`,
    },
  };
  return (
    <section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <ContactUs schoolData={schoolData} schoolDetail={translatedDetailPageRecordData} />
    </section>
  );
};

export default ContactUsPage;
