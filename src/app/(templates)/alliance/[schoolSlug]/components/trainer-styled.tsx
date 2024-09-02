import { styled } from '@mui/system';

export const BannerSection = styled('div')(
  ({ backgroundBannerImage }: { backgroundBannerImage?: String }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundBannerImage})`,
    padding: '150px 20px 23px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    textAlign: 'right',
    boxSizing: 'border-box',
    height: '600px',
  })
);
export const BannerWrapper = styled('div')({
  margin: '0 auto',
  maxWidth: '1050px',
});

export const WebsiteTopLogo = styled('div')({
  margin: '20px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const LogoImage = styled('img')(({ isDataFromTable }:{isDataFromTable : any}) => ({
  maxHeight: '350px',
  borderRadius: !isDataFromTable ? '50%' : '0%',
}));


export const TrainerWrapper = styled('div')(({ theme }) => ({
  padding: '20px 25px',
  margin: '0 auto',
  maxWidth: '1050px',
  color: theme.palette.primary.darker,
  '@media screen and (max-width: 767px)': {
    padding: '30px 10px',
  },
}));

export const TrainerTitle = styled('div')({
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '50px',
  letterSpacing: '0em',
  textAlign: 'center',
  marginTop: '50px',
  marginBottom: '60px',
});

export const TrainerDescription = styled('div')({
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'left',
});

export const TrainerCardWrapper = styled('div')({
  paddingRight: '30px',
  paddingBottom: '35px',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    paddingRight: '0px',
    textAlign: 'center',
  },
});

export const TrainerImage = styled('img')({
  width: '325px',
  height: '216px',
  objectFit:'contain'
  
});

export const ImageWrapper = styled('div')({
  '@media screen and (max-width: 767px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const TrainerName = styled('div')({
  fontSize: '26px',
  fontWeight: 400,
  color: '#444444',
  letterSpacing: '0em',
  textAlign: 'left',
  marginTop: '10px',
});

export const TrainerBelt = styled('div')({
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#444444',
  marginTop: '12px',
});

export const TrainerCardSection = styled('div')({
  display: 'flex',
  paddingTop: '40px',
});

export const TrainerAddressSection = styled('div')({
  background: 'rgba(255, 255, 255, 0.8)',
});

export const TrainerAddressWrapper = styled('div')(({ theme }) => ({
  padding: '20px 25px',
  margin: '0 auto',
  maxWidth: '1050px',
  color: theme.palette.primary.darker,
  '@media screen and (max-width: 767px)': {
    padding: '30px 10px',
  },
}));

export const FullAddressSchool = styled('div')({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'left',
});

export const TrainerAddressTitle = styled('div')({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'left',
  textDecoration: 'underline',
});
