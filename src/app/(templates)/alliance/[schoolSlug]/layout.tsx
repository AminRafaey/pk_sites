import { ReactNode } from 'react';
import DojoSiteHeader from 'src/components/header/DojoSiteHeader';
import { convertPhoneNumberForWhatsApp } from 'src/utils/convert-number';
import DojoSiteFooter from 'src/components/footer/DojoSiteFooter';
import ThemeProvider from 'src/theme';
import { SettingsProvider } from 'src/components/settings';
import ProgressBar from 'src/components/progress-bar/progress-bar';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { formatDomain } from 'src/utils/domain-utils';
import FloatingQuotation from 'src/app/floating-quotation';
import { appFetch, appFetchParams } from 'src/utils/fetch';
import { API_ROUTES } from 'src/utils/api-routes';
import { headers } from 'next/headers';
import { BASE_URL } from 'src/services/config';

// for possible later use
// export const metadata = {
//   title: 'Dojoplus Sites',
//   description: 'Hosted with ❤️ by Dojoplus',
//   themeColor: '#000000',
//   keywords: [
//     'dojoplus',
//     'dojo+',
//     'martial arts school',
//     'dojos',
//     'martial arts',
//     'jiu-jitsu',
//     'judo',
//     'gyms',
//   ],
//   icons: {
//     icon: '/favicon/favicon.ico',
//     shortcut: '/favicon/favicon.ico',
//     apple: [{ url: '/favicon/favicon.ico', sizes: '180x180', type: 'image/png' }],
//   },
//   viewport: 'initial-scale=1, width=device-width',
// };

interface TemplateLayoutProps {
  params?: { schoolSlug?: string };
  children: ReactNode;
}

export const getAllTranslatedDataFromDB = async () => {
  const headersList = headers();
  const refererAcceptLanguage = headersList.get('accept-language');
  const host = headersList.get('host');
  const formattedHostName = formatDomain(host as string);
  const languages: any = refererAcceptLanguage?.split(',');

  // Extract the first language value before any semicolon
  const firstLanguage = languages?.[0].split(';')?.[0];
  const params = new URLSearchParams({
    language: firstLanguage,
    slug: formattedHostName,
  });

  try {
    // change fetch api with params in AppFetch
    const responseData = await appFetchParams(`${BASE_URL}${API_ROUTES.getSiteTranslation}?${params}`);
    return responseData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

export const getDataFromDB = async (subdomain: string) => {
  try {
    const response = await appFetch(`${API_ROUTES.getSchoolData}/${subdomain}`);
    return response;
  } catch (error) {
    return [];
  }
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const schoolSlug = params?.schoolSlug;
  const subdomain = formatDomain(schoolSlug as string);

  const school = await getDataFromDB(subdomain as string);
  return {
    openGraph: {
      title: `${school?.schoolName} • DOJO+` || 'DOJO+ sites',
      description: 'Hosted with ❤️ by Dojoplus',
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    themeColor: '#000000',
    keywords: [
      'dojoplus',
      'dojo+',
      'martial arts school',
      'dojos',
      'martial arts',
      'jiu-jitsu',
      'judo',
      'gyms',
      `${school?.schoolName} Facilities`,
      `${school?.schoolName} Email`,
      `${school?.schoolName} Founder`,
      `${school?.schoolName} Events`,
      `${school?.schoolName} Tournaments`,
      `${school?.schoolName} Blog`,
      `${school?.schoolName} Videos`,
      `${school?.schoolName} Membership`,
      `${school?.schoolName} Reviews`,
      `${school?.schoolName} Instagram`,
      `${school?.schoolName} Address`,
      `${school?.schoolName} Phone Number`,
      `${school?.schoolName} Membership Benefits`,
      `${school?.schoolName} Instructors`,
      `${school?.schoolName} Class Schedule`,
      `${school?.schoolName} Pricing`,
      `${school?.schoolName} Testimonials`,
      `${school?.schoolName} Competition Training`,
      `${school?.schoolName} Seminar`,
      `${school?.schoolName} Social Media`,
      `${school?.schoolName} Training Facility`,
      `${school?.schoolName} News and Updates`,
      `${school?.schoolName} Student Achievements`,
      `${school?.schoolName} Martial Arts Philosophy`,
      `${school?.schoolName} Youth Programs`,
      `${school?.schoolName} Uniforms and Gear`,
      `${school?.schoolName} Online Resources`,
      `${school?.schoolName} Special Offers`,
      `${school?.schoolName} Health and Fitness Benefits`,
      `${school?.schoolName} ${school?.martialArtsLookup?.[0]} Team`,
      `${school?.schoolName} Martial Arts Community`,
      `${school?.schoolName} Contact Information`,
      `Women's Self-Defense Classes in ${school?.city}`,
      `Martial Arts for Kids in ${school?.neighborhood}`,
      `${school?.martialArtsLookup?.[0]} Training`,
      `${school?.martialArtsLookup?.[0]} Techniques`,
      `${school?.martialArtsLookup?.[0]} Academy`,
      `${school?.martialArtsLookup?.[0]} Belt Rankings`,
      `${school?.neighborhood} Neighborhood Martial Arts`,
      `Learn ${school?.martialArtsLookup?.[0]} in ${school?.city}`,
      `${school?.martialArtsLookup?.[0]} School ${school?.city}`,
      `Learn ${school?.martialArtsLookup?.[0]} in ${school?.state}`,
      `Self-Defense Classes in ${school?.city}`,
      `Contact ${school?.schoolName}`,
      `${school?.martialArtsLookup?.[0]} in ${school?.state}`,
      `${school?.martialArtsLookup?.[0]} in ${school?.city}`,
      `Martial Arts School in ${school?.neighborhood}`,
      `${school?.schoolName} in ${school?.country} ${school?.state} ${school?.city}`,
      `${school?.schoolName}`,
      `${school?.slug}`,
      `${school?.martialArtsLookup?.[0]}`,
      `${school?.neighborhood}`,
      `${school?.displayNameFromFounders?.[0]}`,
      `${school?.displayNameFromAdmin?.[0]}`,
      `${school?.firstNameFromInstructor?.[0]}`,
      `${school?.nicknameFromInstructor?.[0]}`,
      `${school?.domainFromDomains?.[0]}`,
      `${school?.displayName2FromInstructor?.[0]}`,
    ],
    icons: {
      icon: school?.schoolLogo?.[0]?.url || '/favicon/favicon.ico',
      shortcut: school?.schoolLogo?.[0]?.url || '/favicon/favicon.ico',
      apple: [
        {
          url: school?.schoolLogo?.[0]?.url || '/favicon/favicon.ico',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    viewport: 'initial-scale=1, width=device-width',
  };
}

export const getPageProps = async (params: any): Promise<{ schoolData: any; phoneNumber: any }> => {
  const { schoolSlug } = params;
  const subdomain = formatDomain(schoolSlug);
  try {
    const schoolData = await getDataFromDB(subdomain);
    const phoneNumber = convertPhoneNumberForWhatsApp(schoolData?.[0]?.phone || '');
    if (!schoolData) notFound();
    return { schoolData, phoneNumber };
  } catch (error) {
    console.error('Error fetching data:', error);
    notFound();
    return { schoolData: {}, phoneNumber: {} };
  }
};

async function TemplateLayout(props: TemplateLayoutProps) {
  const { schoolData } = await getPageProps(props?.params);

  const { translatedDetailPageRecordData, themePalette } = await getAllTranslatedDataFromDB();
  const phoneNumber = convertPhoneNumberForWhatsApp(schoolData?.phone || '');
  const subdomain = formatDomain(props?.params?.schoolSlug as string);

  return (
    <section>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      >
        <ThemeProvider customPreset={themePalette}>
          <DojoSiteHeader
            phoneNumber={phoneNumber}
            schoolSlug={subdomain}
            schoolData={schoolData}
            schoolDetail={translatedDetailPageRecordData}
          />
          <ProgressBar />
          <FloatingQuotation schoolDetail={translatedDetailPageRecordData}>
            {props?.children}
          </FloatingQuotation>
          <DojoSiteFooter
            schoolData={schoolData}
            schoolDetail={translatedDetailPageRecordData}
            phoneNumber={phoneNumber}
          />
        </ThemeProvider>
      </SettingsProvider>
    </section>
  );
}

export default TemplateLayout;
