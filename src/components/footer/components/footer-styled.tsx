import { styled } from '@mui/system';

export const FooterSection = styled('div')(({ theme }) => ({
  padding: '56px 0px',
  backgroundColor: `${theme.palette.primary.darker}`,
}));

export const FooterWrapper = styled('div')({
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 1140,
  marginTop: '30px',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const FooterSectionLogo = styled('div')({
  width: '15%',
  cursor: 'pointer',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 30px 15px 30px',
  },
});

export const SchoolLogo = styled('img')(({ isDataFromAirtable }: { isDataFromAirtable: any }) => ({
  borderRadius: !isDataFromAirtable ? '50%' : '0%',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    padding: '15px 30px 30px 30px',
    textAlign: 'center',
  },
}));

export const FooterSchoolHistory = styled('div')({
  width: '67%',

  padding: '0px 60px 30px 20px',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    padding: '15px 30px 30px 30px',
    textAlign: 'center',
  },
});

export const History = styled('div')(({ theme }) => ({
  marginBottom: '24px',
  color: theme.palette.primary.contrastText,

  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '1.5rem',
}));

export const SinceHistory = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: 'Poppins, Sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '1.5em',
  letterSpacing: '0px',
  textAlign: 'justify',
  '@media screen and (max-width: 767px)': {
    textAlign: 'center',
  },
}));

export const FooterAddresSection = styled('div')(({ theme }) => ({
  width: '20%',
  color: theme.palette.primary.contrastText,
  '@media screen and (max-width: 767px)': {
    width: '100%',
    padding: '30px 50px',
    textAlign: 'center',
  },
}));

export const ContactNumber = styled('div')({
  fontFamily: 'Poppins',
  fontSize: '28px',
  fontWeight: 500,
  lineHeight: '28px',
  letterSpacing: '0em',
  marginBottom: '15px',
  cursor: 'pointer',
  '@media (min-width: 768px)': {
    textAlign: 'right',
  },
});

export const AddressSchool = styled('div')({
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  marginBottom: '21px',
  cursor: 'pointer',
  '@media (min-width: 768px)': {
    textAlign: 'right',
  },
});

export const SocialIcon = styled('img')({
  marginBottom: '20px',
});

export const TrialClassButton = styled('div')(({ theme }) => ({
  padding: '18px 25px',
  border: '1px solid #ffffff',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#FCFCFC',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const SocialIconWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'end',
  '@media screen and (max-width: 767px)': {
    justifyContent: 'center',
  },
});
