import { styled } from '@mui/material/styles';
import { COLOR_BACKGROUND_WHITE, TEXT_COLOR_WHITE } from 'src/shared/styles/dojo-site-colors';

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

export const UserProfileSection = styled('div')(({ theme }) => ({
  padding: '100px 0px 0px 0px',
  backgroundColor: theme.palette.primary.darker,
  '@media screen and (max-width: 767px)': {
    padding: '10px',
  },
}));

export const UserInfo = styled('div')`
  max-width: 1140px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const UserImageUrl = styled('img')`
  width: 40%;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 220px;
  }
`;

export const UserTitle = styled('div')(({ theme }) => ({
  fontWeight: 700,
  fontSize: '40px',
  marginBottom: '24px',
  lineHeight: '1.3em',
  color: theme.palette.primary.main,
}));

export const UserDescription = styled('div')(({ theme }) => ({
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '27px',
  color: theme.palette.primary.contrastText,
}));

export const UserSection = styled('div')`
  width: 60%;
  padding: 100px;
  @media screen and (max-width: 767px) {
    padding: 90px 30px;
    width: 100%;
  }
`;

export const PlaningSection = styled('div')(({ theme }) => ({
  paddingBlock: '100px',
  color: theme.palette.primary.darker,
  [theme.breakpoints.down('sm')]: {
    paddingInline: '50px',
  },
  [theme.breakpoints.down('md')]: {
    paddingInline: '30px',
  },
}));

export const PlaningTitle = styled('div')`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 60px;
`;

export const Description = styled('div')({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'left',
  marginBottom: '24px',
});

export const CardSection = styled('div')(({ theme }: { theme?: any }) => ({
  width: '265px',
  height: '256px',
  backgroundColor: `${theme.palette.primary.main}`,
  ':hover': {
    backgroundColor: '#FCFCFC',
  },
  marginRight: '20px',
  marginBottom: '30px',
  cursor: 'pointer',
  border: `1px solid ${theme.palette.primary.main}`,
  '@media screen and (max-width: 767px)': {
    marginBottom: '30px',
    marginRight: '0px',
  },
}));

export const CardPlaning = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: '38px',
  paddingBlock: '30px',
});

export const CardPlaningLogo = styled('img')({
  width: '50px',
  height: '40px',
});

export const CardTitle = styled('div')({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  marginTop: '36px',
});

export const CardDescription = styled('div')({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
});

export const CardWrapper = styled('div')({
  marginBlock: '80px',
  display: 'flex',
  '@media screen and (max-width: 767px)': {
    marginBlock: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ExperimentalSection = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.darker,
  paddingBlock: '100px',
  '@media screen and (max-width: 767px)': {
    paddingInline: '50px',
    paddingBlock: '80px',
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
  lineHeight: '41px',
  color: theme.palette.primary.main,
}));

export const ExperimentClassTimingButton = styled('div')(({ theme }) => ({
  marginTop: '66px',
  height: '60px',
  width: 'max-content',
  padding: '18px 25px',
  border: '1px solid #ffffff',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  textAlign: 'center',
  color: '#FCFCFC',
  cursor: 'pointer',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main} `,
  },
}));

export const ExperimentalWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PlaningWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const TrialClassButtons = styled('div')(({ theme }) => ({
  marginTop: '66px',
  width: 'max-content',
  padding: '18px 25px',
  border: '1px solid #ffffff',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  textAlign: 'center',
  color: `${TEXT_COLOR_WHITE}`,
  cursor: 'pointer',
  '@media screen and (max-width: 767px)': {
    width: '80%',
  },
  '@media screen and (max-width: 1024px)': {
    width: '100%',
  },
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const TrialButtonWrapper = styled('div')({
  '@media screen and (max-width: 767px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const JoinStudentSection = styled('div')({
  backgroundColor: `${COLOR_BACKGROUND_WHITE}`,
  paddingBlock: '90px',
  '@media screen and (max-width: 767px)': {
    padding: '60px 30px',
  },
  '@media screen and (max-width: 1024px)': {
    paddingInline: '30px',
  },
});

export const StudentSectionWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const StudentIntroTitle = styled('div')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'left',
  marginBottom: '24px',
  width: '50%',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    fontWeight: 600,
  },
}));

export const StudentEnrollData = styled('div')({
  marginBlock: '20px',
  display: 'flex',
  '@media screen and (max-width: 767px)': {
    marginBlock: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const StudentAchievementCard = styled('div')({
  width: 'calc(20% - 50px / 2)',
  marginRight: '20px',
  '@media screen and (max-width: 767px)': {
    marginRight: '0px',
    width: 'calc(100% - 0px / 2)',
  },
});

export const StudentCardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '20px',
  paddingBlock: '30px',
  '@media screen and (max-width: 767px)': {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const AchievementIcon = styled('img')({
  width: '40px',
  height: '32px',
});

export const StudentNumber = styled('div')({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'left',
  '@media screen and (max-width: 767px)': {
    fontSize: '30px',
    fontWeight: 600,
  },
});

export const StudentAchievementDescription = styled('div')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: theme.palette.primary.light,
  '@media screen and (max-width: 767px)': {
    fontSize: '22px',
    fontWeight: 500,
    width: 'min-content',
    textAlign: 'center',
  },
}));

export const SchoolImagesSection = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.darker,
  paddingBlock: '90px',
  '@media screen and (max-width: 767px)': {
    padding: '90px 30px',
  },
  '@media screen and (max-width: 1024px)': {
    paddingInline: '30px',
  },
}));

export const SchoolImageWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '10px',
});

