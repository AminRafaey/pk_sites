'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/system';
import useLiveRemoteTime from 'src/hooks/useLiveRemoteTime';
import { useResponsive } from 'src/hooks/use-responsive';
import { MICRO_DATA } from 'src/utils/micro-data';
import { useTranslation } from 'react-i18next';
import ScheduleCard from './components/ScheduleCard';
import {
  Content,
  Day,
  DayContainer,
  DaySlider,
  DaySliderContainer,
  H1,
  NoEventWrapper,
  SchedulePageWrapper,
  SchedulesWrapper,
  TextWhite18UppercaseRegular,
} from './components/schedules-styled';

type SchedulesProfileProps = {
  scheduleData?: { classData: any; zoneTime: Date };
  schoolDetail?: any;
};

const SchedulesPage: React.FC<SchedulesProfileProps> = ({
  scheduleData,
  schoolDetail,
}): JSX.Element => {
  const getSchedulesForDay = (day: string): any =>
    scheduleData?.classData
      ?.filter((node: any) => node.weekday?.toLowerCase().includes(day.toLowerCase()))
      .sort((firstNode: any, secondNode: any) => firstNode.timeStart - secondNode.timeStart);

  const isMobile = useResponsive('down', 'md');

  const mondaySchedules = getSchedulesForDay('Monday');
  const tuesdaySchedules = getSchedulesForDay('Tuesday');
  const wednesdaySchedules = getSchedulesForDay('Wednesday');
  const thursdaySchedules = getSchedulesForDay('Thursday');
  const fridaySchedules = getSchedulesForDay('Friday');
  const saturdaySchedules = getSchedulesForDay('Saturday');
  const SundaySchedules = getSchedulesForDay('Sunday');

  const mon = useRef<HTMLHeadingElement>();
  const tue = useRef<HTMLHeadingElement>();
  const wed = useRef<HTMLHeadingElement>();
  const thu = useRef<HTMLHeadingElement>();
  const fri = useRef<HTMLHeadingElement>();
  const sat = useRef<HTMLHeadingElement>();
  const sun = useRef<HTMLHeadingElement>();

  const { t } = useTranslation();
  const textMonday = t('MONDAY');
  const textTuesday = t('TUESDAY');
  const textWednesday = t('WEDNESDAY');
  const textThursday = t('THURSDAY');
  const textFriday = t('FRIDAY');
  const textSaturday = t('SATURDAY');
  const textSunday = t('SUNDAY');
  const textNoEvent = t("We're sorry, there are no more classes today");

  const timeTables = [
    {
      id: 'Monday',
      day: textMonday,
      schedules: mondaySchedules,
      ref: mon,
    },
    {
      id: 'Tuesday',
      day: textTuesday,
      schedules: tuesdaySchedules,
      ref: tue,
    },
    {
      id: 'Wednesday',
      day: textWednesday,
      schedules: wednesdaySchedules,
      ref: wed,
    },
    {
      id: 'Thursday',
      day: textThursday,
      schedules: thursdaySchedules,
      ref: thu,
    },
    {
      id: 'Friday',
      day: textFriday,
      schedules: fridaySchedules,
      ref: fri,
    },
    {
      id: 'Saturday',
      day: textSaturday,
      schedules: saturdaySchedules,
      ref: sat,
    },
    {
      id: 'Sunday',
      day: textSunday,
      schedules: SundaySchedules,
      ref: sun,
    },
  ];

  const [schoolCurrentTime] = useState(scheduleData?.zoneTime);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const liveTime = useLiveRemoteTime(schoolCurrentTime);
  const dayWeek = new Date(liveTime).toLocaleString('en-us', {
    weekday: 'long',
  });

  const [selectedDay, setSelectedDay] = useState(dayWeek.toUpperCase());
  const shouldAutoScroll = useRef(true);
  const headerHeight: number = 70;

  const scrollPositions: any = useRef([]);

  const autoScrollRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = () => {
    if (shouldAutoScroll?.current) {
      const currentScrollPosition = window.scrollY + headerHeight;
      const intersectedTable = scrollPositions.current.find(
        (table: any) => currentScrollPosition >= table.start && currentScrollPosition < table.end
      );

      if (intersectedTable) {
        setSelectedDay(intersectedTable.day);
      }
    }
    setTimeout(() => {
      shouldAutoScroll.current = true;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollPositions.current = timeTables.map((table: any) => ({
      start: table.ref.current.offsetTop - headerHeight,
      end: table.ref.current.offsetTop + table.ref.current.clientHeight - headerHeight,
      day: table.day,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = (timeTable?: any) => {
    shouldAutoScroll.current = false;
    setSelectedDay(timeTable?.day);
    if (timeTable?.ref?.current) {
      const scrollPosition = timeTable.ref.current.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (autoScrollRef?.current) {
      const offset = autoScrollRef.current.getBoundingClientRect().top - 250;
      window.scrollTo({
        top: window.scrollY + offset,
        behavior: 'smooth',
      });
    }
  }, []);
  const theme: any = useTheme();

  return (
    <SchedulePageWrapper itemScope itemType="http://schema.org/EducationalOrganization">
      <Content>
        <DaySliderContainer id="DaySliderContainer">
          {!isMobile ? (
            <DaySlider>
              {timeTables.map((timeTable) => (
                <DayContainer
                  isActive={selectedDay === timeTable.day}
                  onClick={() => handleTabClick(timeTable)}
                  theme={theme}
                >
                  <Day itemProp={MICRO_DATA.NAME}>{timeTable?.day}</Day>
                </DayContainer>
              ))}
            </DaySlider>
          ) : (
            <DaySlider>
              {timeTables.map((timeTable) => (
                <DayContainer
                  isActive={selectedDay === timeTable.day}
                  onClick={() => handleTabClick(timeTable)}
                  theme={theme}
                >
                  <Day itemProp={MICRO_DATA.NAME}>{timeTable?.day.charAt(0)}</Day>
                </DayContainer>
              ))}
            </DaySlider>
          )}
        </DaySliderContainer>

        {timeTables.map((timeTable) => (
          <div ref={timeTable.ref as RefObject<HTMLDivElement>} id={timeTable.id}>
            <div ref={dayWeek === timeTable.id ? autoScrollRef : null} />
            <H1 itemProp={MICRO_DATA.NAME}>{timeTable.day}</H1>
            {timeTable.schedules && timeTable.schedules.length === 0 && (
              <NoEventWrapper id={timeTable.id} className="schedule-space-gap">
                <TextWhite18UppercaseRegular itemProp={MICRO_DATA.NAME}>
                  {textNoEvent}
                </TextWhite18UppercaseRegular>
              </NoEventWrapper>
            )}
            <SchedulesWrapper>
              {timeTable.schedules?.map((val: any) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ScheduleCard
                    isLive
                    scheduleData={val}
                    days={days}
                    dayWeek={dayWeek}
                    schoolCurrentTime={schoolCurrentTime}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </SchedulesWrapper>
          </div>
        ))}
      </Content>
    </SchedulePageWrapper>
  );
};

export default SchedulesPage;
