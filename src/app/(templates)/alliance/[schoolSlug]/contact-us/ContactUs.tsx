'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from '@mui/system';
import { Button, Alert } from '@mui/material';
import axios from 'axios';
import PhoneNumberInput from 'src/components/PhoneNumberInput';
import MapComponent from 'src/layouts/location/components/MapComponent';
import { useTranslation } from 'react-i18next';
import { MICRO_DATA } from 'src/utils/micro-data';
import {
  AddressSection,
  AddressTitle,
  CompleteAddress,
  FieldName,
  ContactUsAddressWrapper,
  ContactUsDescription,
  ContactUsFieldWrapper,
  ContactUsFieldsWrapper,
  ContactUsNumber,
  ContactUsSection,
  ContactUsTitle,
  FormContainer,
  MapSection,
  SectionContactUsPage,
  SectionPageWrapper,
  CustomTextField,
  Error,
} from './components/contact-us-page-styled';
import { API_ROUTES } from '../../../../../utils/api-routes';

type ContactUsProps = {
  schoolData?: any;
  schoolDetail?: any;
};

const ContactUs: React.FC<ContactUsProps> = ({ schoolData, schoolDetail }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [sending, setSending] = useState<boolean>();
  const [isAlert, setIsAlert] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      checkbox: false,
      username: '',
      telephone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: any) => {
    setIsAlert(false);
    const payload = {
      Email: data.email,
      Phone: data.telephone,
      'Full Name': data.username,
      'Additional Information': data.message,
      Country: selectedCountry,
      School: schoolData?.slug,
      Source: 'vintagetoons',
    };
    try {
      setSending(true);

      await axios.post(API_ROUTES.postContactForm, payload);
      setSending(false);
      setIsAlert(true);
    } catch (error) {
      setSending(false);
    }
    reset();
  };

  const handleClose = () => {
    setIsAlert(false);
  };

  return (
    <div itemScope itemType="http://schema.org/EducationalOrganization">
      {schoolData?.lat && schoolData?.long && (
        <SectionContactUsPage>
          <SectionPageWrapper>
            <MapSection>
              <div itemProp={MICRO_DATA.HAS_MAP} style={{ height: '300px', width: '100%' }}>
                <MapComponent
                  lat={schoolData?.lat}
                  lng={schoolData?.long}
                  title="contact us page"
                />
              </div>
            </MapSection>
          </SectionPageWrapper>
        </SectionContactUsPage>
      )}
      <ContactUsSection>
        <ContactUsFieldWrapper>
          <ContactUsAddressWrapper>
            <ContactUsTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.contactUs}</ContactUsTitle>
            <ContactUsDescription itemProp={MICRO_DATA.DESCRIPTION}>
              {schoolDetail?.contactUsDescription}
            </ContactUsDescription>
            <AddressSection>
              <AddressTitle itemProp={MICRO_DATA.NAME}>{schoolDetail?.visit}</AddressTitle>
              <ContactUsNumber itemProp={MICRO_DATA.TELEPHONE}>{schoolData?.phone}</ContactUsNumber>
              <CompleteAddress itemProp={MICRO_DATA.ADDRESS}>
                {schoolData?.fullAddress}
              </CompleteAddress>
            </AddressSection>
          </ContactUsAddressWrapper>
          <ContactUsFieldsWrapper>
            <FormContainer>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FieldName style={{ marginTop: '0px' }}>{t('Nome')}</FieldName>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <CustomTextField placeholder={`${t('Qual é o seu nome?')}`} {...field} />
                      {errors?.username && <Error>{t('Por favor, preencha corretamente.')}</Error>}
                    </>
                  )}
                />

                <FieldName>{t('Telefone')}</FieldName>
                <Controller
                  name="telephone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <PhoneNumberInput
                        value={field.value || ''}
                        onChange={(e: any) => setValue('telephone', e)}
                        onCountryChange={setSelectedCountry}
                      />
                      {errors?.telephone && <Error>{t('Por favor, preencha corretamente.')}</Error>}
                    </>
                  )}
                />
                <FieldName>{t('E-mail')}</FieldName>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <CustomTextField placeholder={`${t('E-mail')}`} {...field} />
                      {errors?.email && <Error>{t('Por favor, preencha corretamente.')}</Error>}
                    </>
                  )}
                />
                <FieldName>{t('Mensagem')}</FieldName>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <CustomTextField
                        placeholder={`${t('Mensagem')}`}
                        multiline
                        rows={8}
                        {...field}
                      />
                      {errors?.message && <Error>{t('Por favor, preencha corretamente.')}</Error>}
                    </>
                  )}
                />
                {isAlert && (
                  <Alert sx={{ marginTop: '30px' }} severity="success" onClose={handleClose}>
                    {t('Você receberá um e-mail de confirmação em breve.')}
                  </Alert>
                )}
                <Button
                  sx={{
                    marginTop: '80px',
                    borderRadius: '0px !important',
                    padding: '12px 0px !important',
                    backgroundColor: `${theme.palette.primary.lighter} !important`,
                    color: '#000',
                    fontWeight: '900',
                    border: `1px solid ${theme.palette.primary.light} !important`,
                    '&:hover': {
                      boxShadow: 'none',
                      border: `1px solid ${theme.palette.primary.main} !important`,
                    },
                  }}
                  variant="contained"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? `${t('enviando...')}` : `${t('Enviar')}`}
                </Button>
              </form>
            </FormContainer>
          </ContactUsFieldsWrapper>
        </ContactUsFieldWrapper>
      </ContactUsSection>
    </div>
  );
};

export default ContactUs;
