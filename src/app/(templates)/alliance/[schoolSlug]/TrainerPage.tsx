'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { DefaultAvatar } from 'src/shared/DefaultAvatar';
import { useTranslation } from 'react-i18next';
import { MICRO_DATA } from 'src/utils/micro-data';
import {
  BannerSection,
  BannerWrapper,
  FullAddressSchool,
  LogoImage,
  TrainerAddressSection,
  TrainerAddressTitle,
  TrainerAddressWrapper,
  TrainerBelt,
  TrainerCardSection,
  TrainerCardWrapper,
  TrainerDescription,
  TrainerImage,
  ImageWrapper,
  TrainerName,
  TrainerTitle,
  TrainerWrapper,
  WebsiteTopLogo,
} from './components/trainer-styled';

type TrainerProps = {
  selectedSchool?: any;
  schoolDetail?: any;
  instructorData?: any;
};

const TrainerPage: React.FC<TrainerProps> = ({ selectedSchool, schoolDetail, instructorData }) => {
  const { t } = useTranslation();
  return (
    <div itemScope itemType="http://schema.org/EducationalOrganization">
      <BannerSection
        backgroundBannerImage={
          schoolDetail?.bannerBackgroundImage ||
          'https://res.cloudinary.com/de1kz0ucq/image/upload/v1692112709/placeholder-image_wjcy2v.jpg'
        }
      >
        <BannerWrapper>
          <WebsiteTopLogo>
            <LogoImage
              itemProp={MICRO_DATA.IMAGE}
              isDataFromTable={schoolDetail?.bannerLogo}
              src={schoolDetail?.bannerLogo || selectedSchool?.schoolLogo?.[0]?.url || ''}
            />
          </WebsiteTopLogo>
        </BannerWrapper>
      </BannerSection>
      {instructorData && (
        <>
          <div>
            <TrainerWrapper>
              <TrainerTitle itemProp={MICRO_DATA.NAME}>
                {schoolDetail?.typeOfMartialArt}
              </TrainerTitle>
              <TrainerDescription itemProp={MICRO_DATA.DESCRIPTION}>
                {schoolDetail?.trainerBioData}
              </TrainerDescription>
              <TrainerCardSection>
                <Grid container>
                  {instructorData?.map((data: any) => (
                    <Grid
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      xl={4}
                    >
                      <TrainerCardWrapper>
                        <ImageWrapper>
                          <TrainerImage
                            itemProp={MICRO_DATA.IMAGE}
                            src={data?.instructorDetail.photo?.[0]?.url || DefaultAvatar}
                          />
                        </ImageWrapper>
                        <TrainerName itemProp={MICRO_DATA.NAME}>
                          {data?.instructorDetail?.displayName}
                        </TrainerName>
                        <TrainerBelt itemProp={MICRO_DATA.NAME}>
                          {data?.instructorRankData?.levelFromMartialArtsRanks?.[0]}{' '}
                          {data?.instructorRankData?.martialArtFromMartialArtsRanks?.[0]}
                        </TrainerBelt>
                      </TrainerCardWrapper>
                    </Grid>
                  ))}
                </Grid>
              </TrainerCardSection>
            </TrainerWrapper>
          </div>
          <TrainerAddressSection>
            {selectedSchool?.schoolName && selectedSchool?.fullAddress && (
              <TrainerAddressWrapper>
                <TrainerAddressTitle itemProp={MICRO_DATA.NAME}>
                  {schoolDetail?.trainingCenter}
                </TrainerAddressTitle>
                <FullAddressSchool itemProp={MICRO_DATA.ADDRESS}>
                  {t(selectedSchool?.schoolName)} / {t(selectedSchool?.fullAddress)}
                </FullAddressSchool>
              </TrainerAddressWrapper>
            )}
          </TrainerAddressSection>
        </>
      )}
    </div>
  );
};

export default TrainerPage;
