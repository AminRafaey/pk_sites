'use client';

import React from 'react';
import { useTheme } from '@mui/system';
import { ROUTES } from 'src/utils/menu-routes';
import { MICRO_DATA } from 'src/utils/micro-data';
import { useTranslation } from 'react-i18next';
import {
  AddressSchool,
  ButtonWrapper,
  ContactNumber,
  FooterAddresSection,
  FooterSchoolHistory,
  FooterSection,
  FooterSectionLogo,
  FooterWrapper,
  History,
  SchoolLogo,
  SinceHistory,
  SocialIcon,
  SocialIconWrapper,
  TrialClassButton,
} from './components/footer-styled';
import Link from '../link/Link';

type DojoSiteFooterProps = {
  schoolData?: any;
  schoolDetail?: any;
  phoneNumber?: number;
};

const DojoSiteFooter: React.FC<DojoSiteFooterProps> = ({
  schoolData,
  schoolDetail,
  phoneNumber,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <FooterSection itemScope itemType="http://schema.org/EducationalOrganization">
      <FooterWrapper>
        <FooterSectionLogo>
          <Link href={`${ROUTES.INDEX}`}>
            <SchoolLogo
              itemProp={MICRO_DATA.IMAGE}
              src={
                schoolDetail?.schoolLightLogo ||
                schoolData?.schoolLogo?.[0]?.url ||
                'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692106382/placeholder_Fall_Back_Image_lgbm6q.jpg'
              }
              isDataFromAirtable={schoolDetail?.schoolLightLogo}
            />
          </Link>
        </FooterSectionLogo>
        <FooterSchoolHistory>
          <History itemProp={MICRO_DATA.DESCRIPTION}>{schoolDetail?.schoolHistory}</History>
          {schoolData?.schoolName && schoolData?.location && (
            <SinceHistory itemProp={MICRO_DATA.LOCATION}>
              {' '}
              © 2022 – {schoolData?.schoolName} {t('equipe')} {schoolData?.location}
            </SinceHistory>
          )}
        </FooterSchoolHistory>
        <FooterAddresSection>
          <a
            style={{
              textDecoration: 'none',
              color: `${theme.palette.primary.contrastText}`,
            }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          >
            <ContactNumber itemProp={MICRO_DATA.TELEPHONE}>{schoolData?.phone}</ContactNumber>
          </a>

          <AddressSchool
            itemProp={MICRO_DATA.ADDRESS}
            onClick={() => {
              const url = `https://www.google.com/maps/place/${schoolData?.lat},${schoolData?.long}`;
              window.open(url, '_blank');
            }}
          >
            {schoolData?.fullAddress}
          </AddressSchool>
          {schoolData?.instagram && (
            <SocialIconWrapper>
              <a
                target="_blank"
                href={schoolData?.instagram || 'https://www.instagram.com/'}
                rel="noopener noreferrer"
              >
                <SocialIcon src="/icons/instagram-icon.svg" />
              </a>
            </SocialIconWrapper>
          )}

          <ButtonWrapper>
            <Link href={`/${ROUTES.CONTACT_US}/`} style={{ width: '100%' }}>
              <TrialClassButton>{t('Aula Experimental')}</TrialClassButton>
            </Link>
          </ButtonWrapper>
        </FooterAddresSection>
      </FooterWrapper>
    </FooterSection>
  );
};

export default DojoSiteFooter;
