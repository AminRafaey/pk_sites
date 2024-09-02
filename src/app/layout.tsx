import 'src/locales/i18n';
// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../shared/styles/globals.css';

// ----------------------------------------------------------------------

// // slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ----------------------------------------------------------------------

// theme
import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
// components
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
import Script from 'next/script'
// auth
// import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dojoplus Sites',
  description: 'Hosted with ❤️ by Dojoplus',
  manifest: '/manifest.json',
  themeColor: '#000000',
  // themeColor: palette('light').primary?.main,
  keywords: [
    'dojoplus',
    'dojo+',
    'martial arts school',
    'dojos',
    'martial arts',
    'jiu-jitsu',
    'judo',
    'gyms',
  ],
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [{ url: '/favicon/favicon.ico', sizes: '180x180', type: 'image/png' }],
  },
  viewport: 'initial-scale=1, width=device-width',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        {/* <AuthProvider> */}
          <Script
            src="https://maps.google.com/maps/api/js?key=AIzaSyA7OXXpkCUsyuTOCs37F8sjwlY4I57PkT0"
          />
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
          <ThemeProvider>
            <MotionLazy>
              <SettingsDrawer />
              <ProgressBar />
              {/* <AuthConsumer> */}
              {children}
              {/* </AuthConsumer> */}
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
