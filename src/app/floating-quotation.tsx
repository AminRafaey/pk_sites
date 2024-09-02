'use client';

import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const DojoPlusIcon = styled('svg')({});

const FloatingWrapper = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 16px 28.8px -4.5px #00000008',
  color: theme.palette.primary.darker,
  position: 'fixed',
  bottom: '28px',
  right: '23px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  padding: '8px 12px 7px 12px',
  zIndex: '2',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
  },
}));

const FloatingQuotation = ({
  children,
  schoolDetail,
}: {
  children: ReactNode;
  schoolDetail: any;
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      {children}
      <FloatingWrapper theme={theme}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 900,
          }}
        >
          {t('Desenvolvido por')}
        </Typography>
        <DojoPlusIcon
          style={{
            width: '54px',
            height: '14px',
            marginLeft: '10px',
          }}
        >
          <path
            d="M4.45086 11.5H9.14989L11.5965 9.02462L11.6031 0.5H0.755859V11.4838H3.21383V2.99064H9.14516V9.02462H4.45086V11.5ZM53.1347 6.8496V5.14849H51.1059V3.10602H49.416V5.14849H47.3872V6.8496H49.416V8.89208H51.1059V6.8496H53.1347ZM30.1719 9.02367H25.5089V11.4924H30.1719V9.02367ZM31.4175 0.504768V11.4924L33.8688 9.02367V0.504768H31.4175ZM46.2316 0.504768V11.4914H39.0917V9.02271H43.767V2.98682H37.8594V11.4914H35.3939V0.504768H46.2316ZM23.9725 11.4914V0.504768H13.1347V11.4914H15.5993V2.98682H21.507V9.02271H16.8316V11.4914H23.9725Z"
            fill={theme.palette.primary.darker}
          />
        </DojoPlusIcon>{' '}
      </FloatingWrapper>
    </>
  );
};

export default FloatingQuotation;
