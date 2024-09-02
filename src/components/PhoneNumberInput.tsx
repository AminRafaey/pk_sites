'use client';

import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber, Country } from 'react-phone-number-input';
// @ts-ignore
import en from 'react-phone-number-input/locale/en';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CountryCode } from 'libphonenumber-js/core';
import 'react-phone-number-input/style.css';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

type FromControlProps = {
  isError: boolean;
  isFocus: boolean;
};

const Container = styled('div')({
  width: '100%',
});

const FormControl = styled('div')<FromControlProps>(({ isError, theme }) => ({
  height: '50px',
  border: isError ? '1.5px solid #d32f2f' : `1px solid ${theme.palette.primary.light}`,
  paddingLeft: '10px',
  transition: 'all 0.1s ease-in',
  position: 'relative',
}));

const HelperText = styled('div')({
  whiteSpace: 'nowrap',
  textTransform: 'capitalize',
  fontSize: '14px',
  color: 'gray',
  fontWeight: '500',
  margin: '0',
  paddingInline: '16px',
  paddingTop: '5px',
});

const Error = styled('p')({
  fontWeight: '500',
  fontSize: '12px',
  paddingLeft: '1rem',
  marginTop: '0',
  marginBottom: '0',
  color: '#d32f2f',
});
type PhoneNumberInputProps = {
  onChange?: any;
  helperText?: string;
  value?: string;
  onCountryChange?: any;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  helperText,
  onCountryChange,
}) => {
  const [isFocus, setFocus] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const { t } = useTranslation();
  const onFocus = (): void => {
    setFocus((state) => !state);
  };

  return (
    <Container>
      <FormControl onBlur={onFocus} onFocus={onFocus} isFocus={isFocus} isError={validateNumber}>
        <PhoneInput
          value={value}
          onChange={(number) => {
            onChange(number);
            setValidateNumber(isValidPhoneNumber(value as string, selectedCountry as CountryCode));
          }}
          defaultCountry={selectedCountry as CountryCode}
          error={validateNumber}
          label="Phone Number"
          placeholder={`${t('Telefone')}`}
          initialValueFormat="national"
          place
          style={{
            height: '52px',
          }}
          onCountryChange={(country) => {
            onCountryChange(en?.[country as Country]);
            setSelectedCountry(country as string);
          }}
          countrySelectProps={{
            style: {
              backgroundColor: 'gray',
            },
          }}
        />
      </FormControl>
      {validateNumber &&
        (validateNumber ? (
          <Error>{validateNumber}</Error>
        ) : (
          <HelperText>{helperText || ''}</HelperText>
        ))}
    </Container>
  );
};

export default PhoneNumberInput;
