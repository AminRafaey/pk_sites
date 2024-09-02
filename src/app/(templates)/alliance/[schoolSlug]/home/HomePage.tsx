'use client';

import React, { useState } from 'react';

import { Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Fade, Slide } from 'react-awesome-reveal';
import Slider from 'react-slick';
import { useTheme } from '@mui/system';
import { TEXT_COLOR_WHITE } from 'src/shared/styles/dojo-site-colors';
import { MICRO_DATA } from 'src/utils/micro-data';
import { useTranslation } from 'react-i18next';
import {
  AboutUsContainer,
  AboutUsDescription,
  AboutUsSchoolName,
  AboutUsSection,
  AboutUsStudentName,
  AboutUsTitle,
  AboutUsWrapper,
  AchievementDescription,
  AchievementLogo,
  AchievementLogoWrapper,
  AchievementTitle,
  BackgroundImageOverlay,
  BannerImage,
  BannerImageWrapper,
  BestTeachingSection,
  ButtonContainer,
  ContentDescription,
  ContentSection,
  ContentTitle,
  ContentWrapper,
  DescriptionImage,
  ElementWrapper,
  ExperimentButton,
  ExperimentalSection,
  ExperimentalWrapper,
  Image,
  MethodologyAchievement,
  MethodologyContent,
  MethodologyDescription,
  MethodologyImage,
  MethodologySection,
  MethodologyTitle,
  SectionHomePage,
  TeachingDescription,
  TeachingTitle,
  Title,
} from './components/home-styled';

type HomeComponentProps = {
  schoolData: any;
  schoolDetail?: any;
  phoneNumber?: number;
  messagesData: [];
  methodologyRecordArray: [];
};

const HomeComponent: React.FC<HomeComponentProps> = ({
  schoolData,
  schoolDetail,
  phoneNumber,
  messagesData,
  methodologyRecordArray,
}) => {
  const { push } = useRouter();
  const { t } = useTranslation();

  const [aboutInfoSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const theme = useTheme();
  const MessageSlide = messagesData?.map((data: any) => (
    <div key={data?.id}>
      <AboutUsDescription itemProp={MICRO_DATA.DESCRIPTION}>{data?.description}</AboutUsDescription>
      <AboutUsStudentName itemProp={MICRO_DATA.HAS_CREDENTIAL}>
        {data?.studentName}
      </AboutUsStudentName>
      <AboutUsSchoolName itemProp={MICRO_DATA.HAS_CREDENTIAL}>{data?.schoolName}</AboutUsSchoolName>
    </div>
  ));
  return (
    <div itemScope itemType="http://schema.org/EducationalOrganization">
      {/* <SectionHomePage imageUrl={schoolDetail?.schoolHallImage}> */}
      <SectionHomePage>
        <DescriptionImage>
          <ContentSection>
            <Fade>
              <ContentTitle itemProp={MICRO_DATA.NAME}>
                {schoolDetail?.schoolSlogan} {schoolData?.martialArtsLookup?.[0]}
              </ContentTitle>
            </Fade>
            <Slide direction="up" triggerOnce={Boolean(true)}>
              <ContentDescription itemProp={MICRO_DATA.DESCRIPTION}>
                {' '}
                {schoolDetail?.schoolSloganDescription}
              </ContentDescription>
            </Slide>
            <ButtonContainer>
              <Button
                sx={{
                  marginTop: '57px',
                  backgroundColor: `${theme.palette.primary.main}`,
                  fontSize: '16px',
                  fontWeight: '400',
                  width: '172px',
                  height: '60px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  color: `${theme.palette.primary.darker}`,
                  borderRadius: '0px !important',
                  cursor: 'pointer',
                  '&:hover': {
                    border: `1px solid ${theme.palette.primary.main}`,
                    backgroundColor: 'white',
                  },
                }}
                onClick={() => push(`/school/`)}
              >
                 {t('Conhecer mais')}
              </Button>
            </ButtonContainer>
          </ContentSection>
          <BannerImageWrapper>
            <BannerImage
              itemProp={MICRO_DATA.IMAGE}
              src={
                schoolDetail?.schoolHallImage ||
                'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692112709/placeholder-image_wjcy2v.jpg'
              }
            />
          </BannerImageWrapper>
        </DescriptionImage>
      </SectionHomePage>
      <BestTeachingSection>
        <BackgroundImageOverlay />
        <div>
          <ElementWrapper>
            <TeachingTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.teachingMethod}</TeachingTitle>
            <TeachingDescription itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
              {schoolDetail?.teachingMethodDescription}
            </TeachingDescription>
          </ElementWrapper>
        </div>
      </BestTeachingSection>
      <MethodologySection>
        <MethodologyImage>
          <Image
            imageUrl={
              schoolDetail?.schoolImage ||
              'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692112709/placeholder-image_wjcy2v.jpg'
            }
          />
        </MethodologyImage>
        <MethodologyContent>
          <ContentWrapper>
            <MethodologyTitle itemProp={MICRO_DATA.NAME}>
              {schoolDetail?.schoolVisionTitle}
            </MethodologyTitle>
            <MethodologyDescription itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
              {schoolDetail?.schoolVisionDescription}
            </MethodologyDescription>
            {methodologyRecordArray?.map((data: any) => (
              <MethodologyAchievement>
                <AchievementLogoWrapper>
                  <AchievementLogo
                    itemProp={MICRO_DATA.IMAGE}
                    src={
                      data?.url ||
                      'https://res.cloudinary.com/de1kz0ucq/image/upload/v1684329170/Achievement_klibhn.svg'
                    }
                  />
                </AchievementLogoWrapper>
                <Slide direction="up" triggerOnce={Boolean(true)}>
                  <div>
                    <AchievementTitle itemProp={MICRO_DATA.NAME}>
                      {data?.achievementTitle}
                    </AchievementTitle>
                    <AchievementDescription itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
                      {data?.achievementDescription}
                    </AchievementDescription>
                  </div>
                </Slide>
              </MethodologyAchievement>
            ))}
          </ContentWrapper>
        </MethodologyContent>
      </MethodologySection>
      <ExperimentalSection>
        <ExperimentalWrapper>
          <Fade>
            <Title itemProp={MICRO_DATA.NAME}>{schoolDetail?.scheduleClassSlogan}</Title>
          </Fade>
          <a
            style={{
              textDecoration: 'none',
              color: `${TEXT_COLOR_WHITE}`,
            }}
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
            rel="noopener noreferrer"
          >
            <ExperimentButton>{t('Agendar aula experimental')}</ExperimentButton>
          </a>
        </ExperimentalWrapper>
      </ExperimentalSection>
      <AboutUsSection>
        <AboutUsWrapper>
          <AboutUsContainer>
            <AboutUsTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.clientThought}</AboutUsTitle>
            <Box sx={{ width: { xs: '250px', sm: '300px', md: '500px', lg: '500px' } }}>
              <Slider {...aboutInfoSetting}>{MessageSlide}</Slider>
            </Box>
          </AboutUsContainer>
        </AboutUsWrapper>
      </AboutUsSection>
    </div>
  );
};

export default HomeComponent;
