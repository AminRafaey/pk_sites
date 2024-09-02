'use client';

import React, { useEffect, useState } from 'react';
import useLiveRemoteTime from 'src/hooks/useLiveRemoteTime';
import UserAvatar from 'src/components/userAvatar';
import { formattedUTCHours } from 'src/utils/checkins-utils';
import { API_ROUTES } from 'src/utils/api-routes';
import { appFetchClientSide } from 'src/utils/fetch';
import { useTranslation } from 'react-i18next';
import { MICRO_DATA } from 'src/utils/micro-data';
import {
  AchievementInfo,
  AvatarContainer,
  Dash,
  Icon,
  Item,
  NameLiveContainer,
  RightArrow,
  ScheduleCardWrapper,
  ScheduleEventNameStyled,
  ScheduleItem,
  ScheduleItemWrapper,
  ScheduleOpacity,
  ScheduleTime,
  Svg,
  TextGray12Opacity,
  TextMaster,
  TextTime,
  TryFreeButton,
  UserAvatarInfo,
  UserBelt,
  UserName,
} from './schedules-styled';

type CardScheduleProps = {
  style?: React.CSSProperties;
  isLive?: boolean;
  hasEndDim?: boolean;
  schoolCurrentTime?: any;
  scheduleData?: any;
  days?: any;
  dayWeek?: any;
  isMobile?: any;
};

const ScheduleCard: React.FC<CardScheduleProps> = ({
  scheduleData,
  days,
  dayWeek,
  isLive,
  style,
  hasEndDim = false,
  schoolCurrentTime,
  isMobile,
}): JSX.Element => {
  const indexDayWeek = days.indexOf(dayWeek);
  const [instructorRank, setInstructorRank] = useState();
  const { t } = useTranslation();
  const username = scheduleData?.instructorLink;

  const endTime = {
    hours: new Date((scheduleData.timeEnd || 0) * 1000).getUTCHours(),
    minutes: new Date((scheduleData.timeEnd || 0) * 1000).getUTCMinutes(),
  };
  const startTime = {
    hours: new Date((scheduleData.timeStart || 0) * 1000).getUTCHours(),
    minutes: new Date((scheduleData.timeStart || 0) * 1000).getUTCMinutes(),
  };

  const isInFuture = indexDayWeek < days.indexOf(scheduleData?.weekday);

  const currentHoursIndexDayWeek = new Date(indexDayWeek || '').getHours();
  const hasEndHours = endTime?.hours < currentHoursIndexDayWeek;

  const currentIndexDayWeek = new Date(indexDayWeek || '').getMinutes();
  const hasEnd = hasEndHours
    ? true
    : endTime?.hours <= currentHoursIndexDayWeek && endTime.minutes <= currentIndexDayWeek;

  const liveTime = useLiveRemoteTime(schoolCurrentTime);
  const currentHours = new Date(liveTime || '').getHours();
  const current = new Date(liveTime || '').getMinutes();

  const classDuration =
    (endTime.hours - startTime.hours) * 60 + (endTime.minutes - startTime.minutes);

  const ongoing =
    isInFuture || hasEnd ? false : currentHours <= endTime.hours && currentHours >= startTime.hours;

  const progress: any = ongoing
    ? classDuration - ((endTime.hours - currentHours) * 60 + (endTime.minutes - current))
    : null;

  const progressBar = ongoing ? (progress / classDuration) * 100 : 0;
  const start = formattedUTCHours(scheduleData.timeStart, scheduleData?.countryFromSchoolLink?.[0]);
  const end = formattedUTCHours(scheduleData.timeEnd, scheduleData?.countryFromSchoolLink?.[0]);

  useEffect(() => {
    try {
      // eslint-disable-next-line consistent-return
      const fetchData = async () => {
        const url = window?.location?.origin;
        if (url) {
          const getInstructorNameBelt = await appFetchClientSide(
            `${url}${API_ROUTES.getInstructorNameBelt}/${username}`
          );
          setInstructorRank(
            getInstructorNameBelt?.instructorRankData?.levelFromMartialArtsRanks?.[0]
          );
          return getInstructorNameBelt;
        }
      };
      fetchData();
    } catch (e) {
      console.log(e, 'error in userAvatar of ');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isMobile ? (
        <ScheduleItem
          style={{
            ...style,
          }}
          hasEnd={(hasEnd && !isLive) || (hasEnd && hasEndDim)}
          progress={progressBar}
        >
          <AvatarContainer>
            <UserAvatar username={scheduleData?.instructorLink} avatarDimension={64} />
          </AvatarContainer>
          <ScheduleItemWrapper>
            <NameLiveContainer itemProp={MICRO_DATA.IMAGE}>
              {ongoing && isLive && !hasEnd ? <Icon src="/icons/live.svg" /> : null}
            </NameLiveContainer>
            <ScheduleEventNameStyled itemProp={MICRO_DATA.NAME}>
              {scheduleData?.className}
            </ScheduleEventNameStyled>
            <TextGray12Opacity itemProp={MICRO_DATA.NAME}>
              {scheduleData?.martialArtsLink}
            </TextGray12Opacity>
            <ScheduleTime>
              <Item>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#999999"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </Svg>
                <TextTime itemProp={MICRO_DATA.NAME}>
                  {start}
                  {'  '}
                  <RightArrow src="/icons/right-arrow.svg" />
                  {'  '}
                  {end}
                </TextTime>
              </Item>
            </ScheduleTime>
            <ScheduleOpacity itemProp={MICRO_DATA.NAME}>{scheduleData?.room}</ScheduleOpacity>
            <TextMaster itemProp={MICRO_DATA.NAME}>
              {scheduleData.instructorLookup && String(scheduleData.instructorLookup)}
            </TextMaster>
          </ScheduleItemWrapper>
        </ScheduleItem>
      ) : (
        <ScheduleCardWrapper>
          <AchievementInfo>
            <ScheduleEventNameStyled itemProp={MICRO_DATA.NAME}>
              {scheduleData?.className}
            </ScheduleEventNameStyled>
            <span style={{ display: 'flex', color: 'grey' }}>
              <TextGray12Opacity itemProp={MICRO_DATA.NAME}>
                {scheduleData?.martialArtsLink}{' '}
              </TextGray12Opacity>
              <div style={{ marginInline: '5px' }}>{' • '}</div>
              <TextGray12Opacity itemProp={MICRO_DATA.NAME}>
                {' '}
                {scheduleData?.room}
              </TextGray12Opacity>
            </span>
            <Dash />
          </AchievementInfo>
          <div>
            {' '}
            <AvatarContainer>
              <UserAvatar username={scheduleData?.instructorLink} avatarDimension={58} />
              <UserAvatarInfo>
                <UserName itemProp={MICRO_DATA.NAME}>{scheduleData?.instructorLookup}</UserName>
                <UserBelt itemProp={MICRO_DATA.NAME}>{instructorRank}</UserBelt>
              </UserAvatarInfo>
            </AvatarContainer>
          </div>
          <div>
            <TextTime itemProp={MICRO_DATA.NAME}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#999999"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </Svg>
              {start}
              {'  '}
              <RightArrow src="/icons/right-arrow.svg" />
              {'  '}
              {end}
            </TextTime>
          </div>
          <div>
            <TryFreeButton variant="contained">{t('Experimente aula grátis')}</TryFreeButton>
          </div>
        </ScheduleCardWrapper>
      )}
    </>
  );
};

export default ScheduleCard;
