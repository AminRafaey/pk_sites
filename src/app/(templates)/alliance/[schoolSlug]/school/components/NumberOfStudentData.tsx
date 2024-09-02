import React, { useRef } from 'react';
import useCounter from 'src/hooks/useCounter';
import { useOnScreen } from 'src/hooks/useOnScreen';

import { MICRO_DATA } from 'src/utils/micro-data';
import {
  AchievementIcon,
  StudentAchievementCard,
  StudentAchievementDescription,
  StudentCardWrapper,
  StudentNumber,
} from './school-styled';

const NumberOfStudentData = ({ data }: any) => {
  const totalNumber = data?.numberOfStudents;
  const ref = useRef<any>();
  const isVisible = useOnScreen(ref);
  const updateCounter = useCounter(isVisible, totalNumber);
  return (
    <StudentAchievementCard ref={ref}>
      <StudentCardWrapper>
        <AchievementIcon itemProp={MICRO_DATA.IMAGE} src={data?.svgUrl} />
        <StudentNumber itemProp={MICRO_DATA.NAME}>+{updateCounter?.counter}</StudentNumber>
        <StudentAchievementDescription itemProp={MICRO_DATA.NAME}>
          {data?.achievementTitle}
        </StudentAchievementDescription>
      </StudentCardWrapper>
    </StudentAchievementCard>
  );
};

export default NumberOfStudentData;
