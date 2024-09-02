import { styled } from '@mui/system';
import { COLOR_BACKGROUND_WHITE } from 'src/shared/styles/dojo-site-colors';


export const ExperimentalSection = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.darker,
  paddingBlock: '90px',
  '@media screen and (max-width: 767px)': {
    padding: '90px 30px',
    textAlign: 'center',
  },
  '@media screen and (max-width: 1024px)': {
    paddingInline: '30px',
  },
}));

export const Title = styled('div')(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '32px',
  color: `${theme.palette.primary.main}`,
  '@media screen and (max-width: 767px)': {
    fontWeight: 600,
  },
}));

export const ExperimentButton = styled('div')(({ theme }) => ({
  marginTop: '66px',
  height: '60px',
  width: '275px',
  padding: '18px 25px',
  border: '1px solid #ffffff',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  textAlign: 'center',
  color: `${theme.palette.primary.contrastText}`,
  cursor: 'pointer',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const SectionHomePage = styled('div')(({ imageUrl }: { imageUrl?: String }) => ({
  paddingBlock: '200px',
  backgroundColor: 'COLOR_BACKGROUND_WHITE',
  // For Letter Use 
  // backgroundImage: imageUrl
  //   ? `url(${imageUrl})`
  //   : "url('https://res.cloudinary.com/de1kz0ucq/image/upload/v1684399717/schoolImageSite_dpypwm.jpg')",
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  '@media screen and (max-width: 767px)': {
    padding: '60px 30px',
  },
  '@media screen and (max-width: 1024px)': {
    paddingInline: '30px',
  },
}));

export const DescriptionImage = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const ContentSection = styled('div')({
  // padding: '0% 50% 0% 0%',
  width: '50%',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  '@media screen and (max-width: 767px)': {
    padding: '0%',
    display: 'flex',
    width: '100%',
  },
});
export const BannerImage = styled('img')({
  objectFit: 'cover',
  zIndex: -1,
  position: 'relative',
});

export const BannerImageWrapper = styled('div')({
  width: '50%',
  height: 'fit-content',
  marginLeft: '30px',
  // boxShadow: 'rgb(255 255 255 / 85%) 120px -51px 210px inset, -51px 120px 210px inset',
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
});

export const ContentTitle = styled('div')(({ theme }) => ({
  marginBottom: '24px',
  width: '100%',
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: '52px',
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
  },
}));

export const ContentDescription = styled('div')(({ theme }) => ({
  marginBottom: '24px',
  width: '100%',
  fontSize: '20px',
  color: `${theme.palette.primary.light}`,
  fontWeight: 500,
  lineHeight: '27px',
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
  },
}));

export const ButtonContainer = styled('div')({
  '@media screen and (max-width: 767px)': {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
});

export const BestTeachingSection = styled('div')(({ theme }) => ({
  padding: '90px 210px 90px 210px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.darker,
  '@media screen and (max-width: 770px)': {
    padding: '90px 30px',
  },
}));

export const BackgroundImageOverlay = styled('div')({
  backgroundImage:
    "url('https://alliancealphaville.com.br/wp-content/uploads/2022/10/lgc2r47.png')",
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '200px auto',
  opacity: 0.15,
});

export const ElementWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
});

export const TeachingTitle = styled('div')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'center',
  color: `${theme.palette.primary.main}`,
  marginBottom: '24px',
  width: '100%',
  '@media screen and (max-width: 767px)': {
    fontSize: '2rem',
    fontWeight: 600,
  },
}));

export const TeachingDescription = styled('div')(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 500,
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'center',
  color: `${theme.palette.primary.contrastText}`,
  '@media screen and (max-width: 767px)': {
    fontSize: '1.3rem',
    fontWeight: 600,
  },
}));

export const MethodologySection = styled('div')({
  display: 'flex',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const MethodologyContent = styled('div')({
  width: '60%',
  backgroundColor: '#FCFCFC',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
});

export const MethodologyImage = styled('div')({
  width: '40%',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
});

export const Image = styled('div')(({ imageUrl }: { imageUrl: String }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  objectFit: 'fill',
  backgroundSize: 'cover',
  padding: '10px',
  height: '100%',
  '@media screen and (max-width: 767px)': {
    height: '270px',
  },
}));

export const ContentWrapper = styled('div')({
  margin: '80px',
  padding: '10px',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  '@media screen and (max-width: 767px)': {
    margin: '90px 30px',
  },
});

export const MethodologyTitle = styled('div')(({ theme }) => ({
  marginBottom: '24px',
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'left',
}));

export const MethodologyDescription = styled('div')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: `${theme.palette.primary.light}`,
  '@media screen and (max-width: 767px)': {
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '1.3em',
  },
}));

export const MethodologyAchievement = styled('div')({
  marginTop: '108px',
  display: 'flex',
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const AchievementLogo = styled('img')({
  width: '70px',
  '@media screen and (max-width: 767px)': {
    width: '50px',
  },
});
export const AchievementLogoWrapper = styled('div')({
  marginRight: '15px',
  '@media screen and (max-width: 767px)': {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '15px',
    marginRight: '0px',
  },
});

export const AchievementTitle = styled('div')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'left',
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
  },
}));

export const AchievementDescription = styled('div')(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 500,
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: `${theme.palette.primary.light}`,
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
  },
}));

export const ExperimentalWrapper = styled('div')`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`;

export const AboutUsSection = styled('div')`
  padding: 90px 0px;
  background-color: ${COLOR_BACKGROUND_WHITE};
  @media screen and (max-width: 767px) {
    padding: 90px 30px;
  }
`;

export const AboutUsWrapper = styled('div')`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  justify-content: center;
`;

export const AboutUsContainer = styled('div')`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AboutUsTitle = styled('div')(({ theme }) => ({
  marginBottom: '52px',
  textAlign: 'center',
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  width: '100%',
}));

export const AboutUsDescription = styled('div')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'center',
  width: '100%',
}));

export const AboutUsStudentName = styled('div')(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 500,
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'center',
  marginTop: '36px',
  width: '100%',
  color: theme.palette.primary.light,
}));

export const AboutUsSchoolName = styled('div')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'center',
  width: '100%',
  marginTop: '10px',
  color: '#B4B4B4',
}));


