'use client';

import React, { useRef, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import Slider from 'react-slick';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/system';
import { CustomNextArrow, CustomPrevArrow } from 'src/components/carousal-icons/SliderIcons';

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
  CardWrapper,
  Description,
  ExperimentClassTimingButton,
  ExperimentalSection,
  ExperimentalWrapper,
  JoinStudentSection,
  PlaningSection,
  PlaningTitle,
  PlaningWrapper,
  SchoolImageWrapper,
  SchoolImagesSection,
  StudentEnrollData,
  StudentIntroTitle,
  StudentSectionWrapper,
  Title,
  TrialButtonWrapper,
  TrialClassButtons,
  UserDescription,
  UserImageUrl,
  UserInfo,
  UserProfileSection,
  UserSection,
  UserTitle,
} from './components/school-styled';
import AchievementCard from './components/AchievementCard';
import NumberOfStudentData from './components/NumberOfStudentData';

type SchoolProps = {
  schoolDetail?: any;
  phoneNumber?: number;
  messagesData?: [];
  schoolImagesUrl?: [];
  classDivisionsLevel?: any;
  satisfiedStudentData?: [];
  masterKeySloganData?: any;
};

const SchoolPageTemplate: React.FC<SchoolProps> = ({
  schoolDetail,
  phoneNumber,
  messagesData,
  schoolImagesUrl,
  classDivisionsLevel,
  satisfiedStudentData,
  masterKeySloganData,
}) => {
  const sliderRef = useRef<Slider>(null);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow prevButtonClick={handlePrevClick} />,
    nextArrow: <CustomNextArrow nextButtonClick={handleNextClick} />,
  };

  const [aboutInfoSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const slides = schoolImagesUrl?.map((ele: any) => (
    <div key={ele?.id}>
      <img
        itemProp={MICRO_DATA.IMAGE}
        style={{ maxHeight: '630px', width: '100%', objectFit: 'cover' }}
        src={
          ele?.schoolImage ||
          'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692112709/placeholder-image_wjcy2v.jpg'
        }
        alt=""
      />
    </div>
  ));

  const MessageSlide = messagesData?.map((data: any) => (
    <div
      key={data?.id}
      style={{
        width: '200px',
      }}
    >
      <AboutUsDescription itemProp={MICRO_DATA.DESCRIPTION}>{data?.description}</AboutUsDescription>
      <AboutUsStudentName itemProp={MICRO_DATA.HAS_CREDENTIAL}>
        {data?.studentName}
      </AboutUsStudentName>
      <AboutUsSchoolName itemProp={MICRO_DATA.NAME}>{data?.schoolName}</AboutUsSchoolName>
    </div>
  ));

  return (
    <div itemScope itemType="http://schema.org/EducationalOrganization">
      <UserProfileSection>
        <UserInfo>
          <UserImageUrl
            itemProp={MICRO_DATA.IMAGE}
            src={
              schoolDetail?.masterImage ||
              'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692342709/Placeholder_Image_dubwug.png'
            }
          />
          <UserSection>
            <Fade>
              <UserTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.masterSlogan}</UserTitle>
            </Fade>
            <Slide direction="up" triggerOnce={Boolean(true)}>
              <UserDescription itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
                {schoolDetail?.masterSloganDescription}
              </UserDescription>
            </Slide>
            <TrialButtonWrapper>
              <a
                style={{
                  textDecoration: 'none',
                  color: `${theme.palette.primary.contrastText}`,
                }}
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
                rel="noopener noreferrer"
              >
                <TrialClassButtons>{t('Agendar aula experimental')}</TrialClassButtons>
              </a>
            </TrialButtonWrapper>
          </UserSection>
        </UserInfo>
      </UserProfileSection>
      <PlaningSection>
        <PlaningWrapper>
          <PlaningTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.masterPlanSlogan}</PlaningTitle>

          {masterKeySloganData?.slice(0, 3).map((data: any) => (
            <Description itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
              {data?.masterKeySlogan}
            </Description>
          ))}
          <Slide direction="up" triggerOnce={Boolean(true)} delay={100}>
            <CardWrapper>
              <Grid container>
                {classDivisionsLevel?.map((data: any) => (
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '40px',
                    }}
                    xs={12}
                    sm={4}
                    md={4}
                    lg={3}
                    xl={3}
                  >
                    <AchievementCard achievementData={data} />
                  </Grid>
                ))}
              </Grid>
            </CardWrapper>
          </Slide>
          {masterKeySloganData?.slice(3, 5)?.map((data: any) => (
            <Description itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
              {data?.masterKeySlogan}
            </Description>
          ))}
        </PlaningWrapper>
      </PlaningSection>
      <ExperimentalSection>
        <ExperimentalWrapper>
          <Fade>
            <Title itemProp={MICRO_DATA.NAME}>{schoolDetail?.scheduleClassSlogan}</Title>
          </Fade>
          <a
            style={{
              textDecoration: 'none',
            }}
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
            rel="noopener noreferrer"
          >
            <ExperimentClassTimingButton>
              {t('Agendar aula experimental')}
            </ExperimentClassTimingButton>
          </a>
        </ExperimentalWrapper>
      </ExperimentalSection>
      <JoinStudentSection>
        <StudentSectionWrapper>
          <StudentIntroTitle itemProp={MICRO_DATA.NAME}>
            {schoolDetail?.satisfiedStudentSlogan}
          </StudentIntroTitle>
          <Slide direction="up" triggerOnce={Boolean(true)}>
            <StudentEnrollData>
              {satisfiedStudentData?.map((data: any) => (
                <NumberOfStudentData data={data} />
              ))}
            </StudentEnrollData>
          </Slide>
        </StudentSectionWrapper>
      </JoinStudentSection>

      <SchoolImagesSection>
        <SchoolImageWrapper>
          <Slider ref={sliderRef} {...settings}>
            {slides}
          </Slider>
        </SchoolImageWrapper>
      </SchoolImagesSection>
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

export default SchoolPageTemplate;
