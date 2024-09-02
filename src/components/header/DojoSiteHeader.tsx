'use client';

import React, { useEffect, useState } from 'react';
import Collapse from '@mui/material/Collapse';

import { styled, Theme, useTheme } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, IconButton } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ROUTES } from 'src/utils/menu-routes';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslation } from 'react-i18next';
import { MICRO_DATA } from 'src/utils/micro-data';
import i18n from 'src/locales/i18n';
import Link from '../link/Link';

interface StyledComponentProps {
  isSelected?: boolean;
}

export const Section = styled('div')(({ bgColor }: { bgColor: string | undefined }) => ({
  backgroundColor: bgColor || '#000',
  padding: '30px 0px',
  position: 'sticky',
  top: 0,
  zIndex: 3,
}));

export const HeaderContainer = styled('div')(
  ({ textColor, isMobile }: { textColor: string | undefined; isMobile: boolean | undefined }) => ({
    display: 'flex',
    justifyContent: isMobile ? 'space-between' : undefined,
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '1140px',
    color: textColor || '#000',
  })
);

export const Logo = styled('img')(
  ({
    isMobile,
    isDataFromAirtable,
  }: {
    isMobile: boolean | undefined;
    isDataFromAirtable: any;
  }) => ({
    marginInline: isMobile ? '30px' : undefined,
    // eslint-disable-next-line no-nested-ternary
    width: isDataFromAirtable ? (isMobile ? '80px' : '196px') : isMobile ? '130px' : '220px',
    // eslint-disable-next-line no-nested-ternary
    minWidth: isDataFromAirtable ? (isMobile ? '80px' : '120px') : isMobile ? '130px' : '220px',
    borderRadius: isDataFromAirtable ? '50%' : '0%',
    cursor: 'pointer',
    objectFit: 'fill',
  })
);

export const Home = styled('div')<StyledComponentProps>(({ theme, isSelected }: any) => ({
  padding: '0 20px',
  cursor: 'pointer',
  fontWeight: isSelected && '600',
  '&:hover': {
    color: '#ccc',
  },
  [theme.breakpoints.down('lg')]: {},
}));

export const SchoolName = styled('div')<StyledComponentProps>(({ isSelected }: any) => ({
  fontWeight: isSelected && '600',
  paddingInline: '20px',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    color: '#ccc',
  },
}));

export const ScheduleMenu = styled('div')<StyledComponentProps>(({ isSelected }: any) => ({
  fontWeight: isSelected && '600',
  paddingInline: '20px',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    color: '#ccc',
  },
}));

export const Contact = styled('div')<StyledComponentProps>(({ isSelected }: any) => ({
  cursor: 'pointer',
  fontWeight: isSelected && '600',
  paddingInline: '20px',
  '&:hover': {
    color: '#ccc',
  },
}));

export const SocialIcon = styled('img')({
  maxWidth: '20px',

  cursor: 'pointer',
});

export const ExperimentalButton = styled('div')(
  ({
    buttonBorderColor,
    theme,
  }: {
    buttonBorderColor: string | undefined;
    theme: Theme | undefined;
  }) => ({
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '255px',
    height: '60px',
    margin: '30px 0px 30px 50px',
    border: `1px solid ${buttonBorderColor}` || '1px solid #000',
    '&:hover': {
      border: `1px solid ${theme}`,
    },
  })
);

export const Menu = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  color: '#000',
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
});

export const OptionMenu = styled('div')({
  padding: '8px 32px',
  fontSize: '1.5rem',
  fontWeight: 400,
  color: '#000000',
  fontFamily: 'Poppins, Sans-serif',
  cursor: 'pointer',
});

const MenuSection = styled('div')(({ menuTextColor }: { menuTextColor: any }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginInline: '25px',
  color: menuTextColor || '#000',
}));

type DojoSiteHeaderStyle = {
  textColor?: string;
  menuIconColor?: string;
  menuTextColor?: string;
  phoneNumber?: number;
  schoolSlug?: string;
  schoolDetail?: any;
  schoolData?: any;
};

const DojoSiteHeader: React.FC<DojoSiteHeaderStyle> = ({
  textColor,
  menuIconColor,
  menuTextColor,
  phoneNumber,
  schoolSlug,
  schoolDetail,
  schoolData,
}) => {
  const isMobile = useResponsive('down', 'md');
  const currentPath = usePathname()?.split('/')?.[1];
  const currentLanguageCode = i18n.language;

  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const [isHeaderDark, setIsHeaderDark] = useState(true);
  const [open, setOpen] = useState(true);
  const [bgColors, setBgColors] = useState(theme.palette.primary.darker);
  const [fgColors, setFgColors] = useState(theme.palette.primary.lighter);

  useEffect(() => {
    switch (currentPath) {
      case ROUTES.HOME:
        setIsHeaderDark(false);
        setBgColors(theme.palette.primary.lighter);
        setFgColors(theme.palette.primary.darker);
        break;
      case ROUTES.SCHOOL:
        setIsHeaderDark(true);
        setBgColors(theme.palette.primary.darker);
        setFgColors(theme.palette.primary.lighter);
        break;
      case ROUTES.SCHEDULES:
        setIsHeaderDark(true);
        setBgColors(theme.palette.primary.darker);
        setFgColors(theme.palette.primary.lighter);
        break;
      case ROUTES.CONTACT_US:
        setIsHeaderDark(false);
        setBgColors(theme.palette.primary.lighter);
        setFgColors(theme.palette.primary.darker);
        break;
      default:
        setIsHeaderDark(false);
        setBgColors(theme.palette.primary.lighter);
        setFgColors(theme.palette.primary.darker);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return (
    <>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Click the close icon if you do not want to see the language abbreviation {currentLanguageCode}
        </Alert>
      </Collapse>
      <Section bgColor={bgColors} itemScope itemType="http://schema.org/EducationalOrganization">
        <HeaderContainer isMobile={isMobile} textColor={textColor || fgColors}>
          <Link color={fgColors} href={`${ROUTES.INDEX}`}>
            <Logo
              itemProp={MICRO_DATA.IMAGE}
              isMobile={isMobile}
              isDataFromAirtable={
                schoolData?.schoolLogo?.[0]?.url && !schoolDetail?.schoolLightLogo
              }
              src={
                isHeaderDark
                  ? schoolDetail?.schoolLightLogo ||
                    schoolData?.schoolLogo?.[0]?.url ||
                    'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692106382/placeholder_Fall_Back_Image_lgbm6q.jpg'
                  : schoolDetail?.schoolDarkLogo ||
                    schoolData?.schoolLogo?.[0]?.url ||
                    'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692106382/placeholder_Fall_Back_Image_lgbm6q.jpg'
              }
            />
          </Link>
          {!isMobile ? (
            <>
              <MenuSection menuTextColor={menuTextColor || fgColors}>
                <Link color={fgColors} href={`/${ROUTES.HOME}/`}>
                  <Home itemProp={MICRO_DATA.NAME} isSelected={ROUTES.HOME === currentPath}>
                    {t('Lar')}
                  </Home>
                </Link>
                <Link color={fgColors} href={`/${ROUTES.SCHOOL}/`}>
                  <SchoolName
                    itemProp={MICRO_DATA.HAS_CREDENTIAL}
                    isSelected={ROUTES.SCHOOL === currentPath}
                  >
                    {schoolData?.schoolName || schoolSlug}
                  </SchoolName>
                </Link>
                <Link color={fgColors} href={`/${ROUTES.SCHEDULES}/`}>
                  <ScheduleMenu
                    itemProp={MICRO_DATA.NAME}
                    isSelected={ROUTES.SCHOOL === currentPath}
                  >
                    {t('horários')}
                  </ScheduleMenu>
                </Link>
                <Link color={fgColors} href={`/${ROUTES.CONTACT_US}/`}>
                  <Contact
                    itemProp={MICRO_DATA.NAME}
                    isSelected={ROUTES.CONTACT_US === currentPath}
                  >
                    {t('Contato')}
                  </Contact>
                </Link>
              </MenuSection>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a
                  style={{ display: 'flex' }}
                  target="_blank"
                  href={schoolData?.instagram}
                  rel="noopener noreferrer"
                >
                  <SocialIcon src="/icons/instagram-icon.svg" />
                </a>
                <Link color={fgColors} href={`/${ROUTES.CONTACT_US}/`}>
                  <ExperimentalButton
                    theme={theme.palette.primary.main}
                    buttonBorderColor={fgColors}
                  >
                    {t('Aula Experimental')}
                  </ExperimentalButton>
                </Link>
              </div>
            </>
          ) : (
            <MenuIcon
              sx={{
                margin: isMobile ? '30px' : undefined,
                width: '30px !important',
                height: '30px !important',
                color: `${menuIconColor || fgColors}`,
              }}
              onClick={toggleMenu}
            />
          )}
          {showMenu && (
            <Menu>
              <Link color={fgColors} href={`/${ROUTES.HOME}/`}>
                <OptionMenu itemProp={MICRO_DATA.NAME} onClick={toggleMenu}>
                  {t('Lar')}
                </OptionMenu>
              </Link>
              <Link color={fgColors} href={`/${ROUTES.SCHOOL}/`}>
                <OptionMenu onClick={toggleMenu}>{schoolData?.schoolName || schoolSlug}</OptionMenu>
              </Link>
              <Link color={fgColors} href={`/${ROUTES.SCHEDULES}/`}>
                <OptionMenu itemProp={MICRO_DATA.NAME} onClick={toggleMenu}>
                  {t('horários')}
                </OptionMenu>
              </Link>
              <Link color={fgColors} href={`/${ROUTES.CONTACT_US}/`}>
                <OptionMenu itemProp={MICRO_DATA.NAME} onClick={toggleMenu}>
                  {t('Contato')}
                </OptionMenu>
              </Link>
              <CloseIcon
                onClick={toggleMenu}
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '32px !important',
                  height: '50px !important',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </Menu>
          )}
        </HeaderContainer>
      </Section>
    </>
  );
};

export default DojoSiteHeader;
