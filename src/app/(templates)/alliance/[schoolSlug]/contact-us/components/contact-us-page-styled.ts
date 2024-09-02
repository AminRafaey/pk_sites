import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';


export const SectionContactUsPage = styled('div')({
  marginTop: '70px',
  '@media screen and (max-width: 767px)': {
    marginTop: '0px',
  },
});

export const SectionPageWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const MapSection = styled('div')({
  width: '100%',
  padding: '10px',
});

export const ContactUsSection = styled('div')({
  padding: '90px 0px',
  '@media screen and (max-width: 767px)': {
    padding: '90px 30px',
  },
});

export const ContactUsFieldWrapper = styled('div')({
  maxWidth: '1140px',
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media screen and (max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const ContactUsAddressWrapper = styled('div')(({ theme }) => ({
  width: '50%',
  paddingRight: '60px',
  '@media screen and (max-width: 767px)': {
    width: '100%',
    padding: '25px 0px'
  },
}));

export const ContactUsFieldsWrapper = styled('div')({
  width: '50%',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
});

export const ContactUsTitle = styled('div')({
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: '52px',
  letterSpacing: '0em',
});

export const ContactUsDescription = styled('div')({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0em',
  marginTop: '22px',
});

export const AddressSection = styled('div')({
  marginTop: '100px',
  width: '340px',
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
});

export const AddressTitle = styled('div')({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  font: 'Poppins',
});

export const CompleteAddress = styled('div')({
  fontSize: '1rem',
  fontWeight: 400,
});

export const ContactUsNumber = styled('div')({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  font: 'Poppins',
});

export const FieldName = styled('div')({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '0em',
  marginTop: '40px',
  marginBottom: '10px',
});

export const FormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light} !important`,
  '& .MuiOutlinedInput-root > fieldset': {
    border: 'none !important',
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '16px !important',
    fontWeight: '400 !important',
  },
  '& input': {
    color: '#000 !important'
  },
  '& ::placeholder': {
    color: `${theme.palette.primary.light}`,
    fontWeight: 400,
    fontSize: '16px',
  },
}));

export const Error = styled('p')({
  fontWeight: 500,
  fontSize: '12px',
  paddingLeft: '1rem',
  marginTop: 0,
  marginBottom: 0,
  color: '#d32f2f',
});